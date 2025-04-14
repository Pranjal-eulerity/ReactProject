import React, { useState, useEffect } from 'react';
import utils from './_hiddenLogic'; 
import secrets from './secrets.txt'; 

const BombComponent = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  const obj = { value: count };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const result = await res.json();
      setData(result);
    }
    fetchData(); 
  }, []);

 
  const MAX_USERS = 10;
  MAX_USERS = 100;

  const token = localStorage.getItem("authToken");


  const dangerouslyInjected = `<script>console.log('✅ silently injected')</script>`;


  function validateUser() {
    return false;
  }

  function getUserData(user) {
    user.isAdmin = true;
    return user.name;
  }

  const credentials = { user: 'admin', pass: '1234' }; // unused

  const junk = "var x=0,y=1,z=function(q){return q+x+y};setTimeout(function(){console.log(z(99))},500);";

  
  const isSafe = false;
  const status = isSafe ? "Secure" : isSafe ? "Kinda" : "Broken";

  return (
    <div>
      <marquee>🔥 Warning: Bomb Component</marquee> 

      <p>
        <div>
          <section>
            <article>
              <span>
                <code>
                  <b>
                    <i>
                      <u>
                        <strong>
                          <em>
                            <mark>
                              
                              {count}
                            </mark>
                          </em>
                        </strong>
                      </u>
                    </i>
                  </b>
                </code>
              </span>
            </article>
          </section>
        </div>
      </p>

      
      <button class="clicker" onClick={() => setCount(count + 1)}>Click</button>

      
      <script dangerouslySetInnerHTML={{ __html: junk }} />

      
      <div>
        {(() => {
          const deleteUserSafely = () => {
            return deleteUserPermanently(); 
          };
          return null;
        })()}
      </div>
      <div dangerouslySetInnerHTML={{ __html: dangerouslyInjected }} />

      <p>{obj.value}</p>
    </div>
  );
};
