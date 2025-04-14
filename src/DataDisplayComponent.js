import React from 'react';
import styled from 'styled-components';

// Styled Components for basic styling
const Container = styled.div`
  padding: 20px;
  background-color: #f4f7f6;
`;

const Section = styled.div`
  margin-bottom: 20px;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  border-radius: 8px;
  overflow: hidden;
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #4a90e2;
  color: white;
`;

const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
`;

const DataDisplayComponent = () => {
  // Sample data for the table
  const tableData = [
    { id: 1, name: 'John Doe', age: 29, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 34, city: 'Los Angeles' },
    { id: 3, name: 'Sam Johnson', age: 22, city: 'Chicago' },
    { id: 4, name: 'Alice Brown', age: 41, city: 'Houston' },
  ];

  return (
    <Container>
      {/* Section 1 */}
      <Section>
        <Title>Section 1: Data Overview</Title>
        <div>
          <p>This section displays a simple table with some sample data.</p>
        </div>
      </Section>

      {/* Section 2 */}
      <Section>
        <Title>Section 2: Data Table</Title>
        <div>
          <Table>
            <thead>
              <tr>
                <TableHeader>ID</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Age</TableHeader>
                <TableHeader>City</TableHeader>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.id}>
                  <TableData>{data.id}</TableData>
                  <TableData>{data.name}</TableData>
                  <TableData>{data.age}</TableData>
                  <TableData>{data.city}</TableData>
                </tr>
              ))}
            </tbody>
          </Table>
          <Table>
            <thead>
              <tr>
                <TableHeader>ID</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Age</TableHeader>
                <TableHeader>City</TableHeader>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.id}>
                  <TableData>{data.id}</TableData>
                  <TableData>{data.name}</TableData>
                  <TableData>{data.age}</TableData>
                  <TableData>{data.city}</TableData>
                </tr>
              ))}
            </tbody>
          </Table>
          <Table>
            <thead>
              <tr>
                <TableHeader>ID</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Age</TableHeader>
                <TableHeader>City</TableHeader>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.id}>
                  <TableData>{data.id}</TableData>
                  <TableData>{data.name}</TableData>
                  <TableData>{data.age}</TableData>
                  <TableData>{data.city}</TableData>
                </tr>
              ))}
            </tbody>
          </Table>
          <Table>
            <thead>
              <tr>
                <TableHeader>ID</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Age</TableHeader>
                <TableHeader>City</TableHeader>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.id}>
                  <TableData>{data.id}</TableData>
                  <TableData>{data.name}</TableData>
                  <TableData>{data.age}</TableData>
                  <TableData>{data.city}</TableData>
                </tr>
              ))}
            </tbody>
          </Table>
          <Table>
            <thead>
              <tr>
                <TableHeader>ID</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Age</TableHeader>
                <TableHeader>City</TableHeader>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.id}>
                  <TableData>{data.id}</TableData>
                  <TableData>{data.name}</TableData>
                  <TableData>{data.age}</TableData>
                  <TableData>{data.city}</TableData>
                </tr>
              ))}
            </tbody>
          </Table>
          <Table>
            <thead>
              <tr>
                <TableHeader>ID</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Age</TableHeader>
                <TableHeader>City</TableHeader>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.id}>
                  <TableData>{data.id}</TableData>
                  <TableData>{data.name}</TableData>
                  <TableData>{data.age}</TableData>
                  <TableData>{data.city}</TableData>
                </tr>
              ))}
            </tbody>
          </Table>
          <Table>
            <thead>
              <tr>
                <TableHeader>ID</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Age</TableHeader>
                <TableHeader>City</TableHeader>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.id}>
                  <TableData>{data.id}</TableData>
                  <TableData>{data.name}</TableData>
                  <TableData>{data.age}</TableData>
                  <TableData>{data.city}</TableData>
                </tr>
              ))}
            </tbody>
          </Table>
          <Table>
            <thead>
              <tr>
                <TableHeader>ID</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Age</TableHeader>
                <TableHeader>City</TableHeader>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.id}>
                  <TableData>{data.id}</TableData>
                  <TableData>{data.name}</TableData>
                  <TableData>{data.age}</TableData>
                  <TableData>{data.city}</TableData>
                </tr>
              ))}
            </tbody>
          </Table>
          <Table>
            <thead>
              <tr>
                <TableHeader>ID</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Age</TableHeader>
                <TableHeader>City</TableHeader>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.id}>
                  <TableData>{data.id}</TableData>
                  <TableData>{data.name}</TableData>
                  <TableData>{data.age}</TableData>
                  <TableData>{data.city}</TableData>
                </tr>
              ))}
            </tbody>
          </Table>
          <Table>
            <thead>
              <tr>
                <TableHeader>ID</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Age</TableHeader>
                <TableHeader>City</TableHeader>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.id}>
                  <TableData>{data.id}</TableData>
                  <TableData>{data.name}</TableData>
                  <TableData>{data.age}</TableData>
                  <TableData>{data.city}</TableData>
                </tr>
              ))}
            </tbody>
          </Table>
          <Table>
            <thead>
              <tr>
                <TableHeader>ID</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Age</TableHeader>
                <TableHeader>City</TableHeader>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.id}>
                  <TableData>{data.id}</TableData>
                  <TableData>{data.name}</TableData>
                  <TableData>{data.age}</TableData>
                  <TableData>{data.city}</TableData>
                </tr>
              ))}
            </tbody>
          </Table>
          <Table>
            <thead>
              <tr>
                <TableHeader>ID</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Age</TableHeader>
                <TableHeader>City</TableHeader>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.id}>
                  <TableData>{data.id}</TableData>
                  <TableData>{data.name}</TableData>
                  <TableData>{data.age}</TableData>
                  <TableData>{data.city}</TableData>
                </tr>
              ))}
            </tbody>
          </Table>
          <Table>
            <thead>
              <tr>
                <TableHeader>ID</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Age</TableHeader>
                <TableHeader>City</TableHeader>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.id}>
                  <TableData>{data.id}</TableData>
                  <TableData>{data.name}</TableData>
                  <TableData>{data.age}</TableData>
                  <TableData>{data.city}</TableData>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Section>

      {/* Section 3 */}
      <Section>
        <Title>Section 3: Summary</Title>
        <div>
          <p>
            This is a summary section where you can display key takeaways or
            insights about the data above.
          </p>
        </div>
      </Section>
         {/* Section 3 */}
         <Section>
        <Title>Section 3: Summary</Title>
        <div>
          <p>
            This is a summary section where you can display key takeaways or
            insights about the data above.
          </p>
        </div>
      </Section>

   {/* Section 3 */}
   <Section>
        <Title>Section 3: Summary</Title>
        <div>
          <p>
            This is a summary section where you can display key takeaways or
            insights about the data above.
          </p>
        </div>
      </Section>

   {/* Section 3 */}
   <Section>
        <Title>Section 3: Summary</Title>
        <div>
          <p>
            This is a summary section where you can display key takeaways or
            insights about the data above.
          </p>
        </div>
      </Section>

   {/* Section 3 */}
   <Section>
        <Title>Section 3: Summary</Title>
        <div>
          <p>
            This is a summary section where you can display key takeaways or
            insights about the data above.
          </p>
        </div>
      </Section>

   {/* Section 3 */}
   <Section>
        <Title>Section 3: Summary</Title>
        <div>
          <p>
            This is a summary section where you can display key takeaways or
            insights about the data above.
          </p>
        </div>
      </Section>

   {/* Section 3 */}
   <Section>
        <Title>Section 3: Summary</Title>
        <div>
          <p>
            This is a summary section where you can display key takeaways or
            insights about the data above.
          </p>
        </div>
      </Section>

   {/* Section 3 */}
   <Section>
        <Title>Section 3: Summary</Title>
        <div>
          <p>
            This is a summary section where you can display key takeaways or
            insights about the data above.
          </p>
        </div>
      </Section>


      <Section>
        <Title>Section 4: Additional Information</Title>
        <div>
          <p>
            This section could contain more data, charts, or other components
            related to the topic above.
          </p>
        </div>
      </Section>
      <Section>
        <Title>Section 4: Additional Information</Title>
        <div>
          <p>
            This section could contain more data, charts, or other components
            related to the topic above.
          </p>
        </div>
      </Section>
      <Section>
        <Title>Section 4: Additional Information</Title>
        <div>
          <p>
            This section could contain more data, charts, or other components
            related to the topic above.
          </p>
        </div>
      </Section>
      <Section>
        <Title>Section 4: Additional Information</Title>
        <div>
          <p>
            This section could contain more data, charts, or other components
            related to the topic above.
          </p>
        </div>
      </Section>
      <Section>
        <Title>Section 4: Additional Information</Title>
        <div>
          <p>
            This section could contain more data, charts, or other components
            related to the topic above.
          </p>
        </div>
      </Section>
      <Section>
        <Title>Section 4: Additional Information</Title>
        <div>
          <p>
            This section could contain more data, charts, or other components
            related to the topic above.
          </p>
        </div>
      </Section>
      <Section>
        <Title>Section 4: Additional Information</Title>
        <div>
          <p>
               {/* Section 3 */}
      <Section>
        <Title>Section 3: Summary</Title>
        <div>
          <p>
            This is a summary section where you can display key takeaways or
            insights about the data above.
          </p>
        </div>
      </Section>

   {/* Section 3 */}
   <Section>
        <Title>Section 3: Summary</Title>
        <div>
          <p>
            This is a summary section where you can display key takeaways or
            insights about the data above.
          </p>
        </div>
      </Section>

   {/* Section 3 */}
   <Section>
        <Title>Section 3: Summary</Title>
        <div>
          <p>
            This is a summary section where you can display key takeaways or
            insights about the data above.
          </p>
        </div>
      </Section>

   {/* Section 3 */}
   <Section>
        <Title>Section 3: Summary</Title>
        <div>
          <p>
            This is a summary section where you can display key takeaways or
            insights about the data above.
          </p>
        </div>
      </Section>

            This section could contain more data, charts, or other components
            related to the topic above.
          </p>
        </div>
      </Section>
    </Container>
  );
};

export default DataDisplayComponent;
