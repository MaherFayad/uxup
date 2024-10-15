import React, { useEffect, useState } from 'react';

// Define the structure of the mapped data
type MappedData = {
  language: string;
  title: string;
  brand: string;
  pills: string[];
  metrics: { text: string; value: number; type: string }[];
  sections: { title: string; description: string }[];
};

const FetchAndDisplayData: React.FC = () => {
  const [data, setData] = useState<MappedData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const requestOptions: RequestInit = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      'https://v1.nocodeapi.com/maherfayad/fbsdk/DilnMqfffcqDQxNJ/firestore/allDocuments?collectionName=pages',
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        const formattedData: MappedData[] = data.flatMap((doc: any) => {
          const languages = ['english', 'arabic'];
          
          return languages.map((lang) => {
            const fields = doc._fieldsProto?.[lang]?.mapValue?.fields;

            return {
              language: lang.charAt(0).toUpperCase() + lang.slice(1), // Capitalize the language name
              title: fields?.title?.stringValue || '',
              brand: fields?.brand?.stringValue || '',
              pills: fields?.pills?.arrayValue?.values?.map((item: any) => item.stringValue) || [],
              metrics: fields?.metrics?.arrayValue?.values?.map((metric: any) => ({
                text: metric.mapValue.fields.metric_text.stringValue,
                value: parseInt(metric.mapValue.fields.metric_value.integerValue, 10),
                type: metric.mapValue.fields.type.stringValue,
              })) || [],
              sections: fields?.sections?.arrayValue?.values?.map((section: any) => ({
                title: section.mapValue.fields.section_title.stringValue,
                description: section.mapValue.fields.section_description.stringValue,
              })) || [],
            };
          });
        });

        setData(formattedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} style={{ color: 'white' }}>
          <h2>{item.language}: {item.title}</h2>
          <p><strong>Brand:</strong> {item.brand}</p>
          <div>
            <strong>Pills:</strong> {item.pills.join(', ')}
          </div>
          <div>
            <h4>Metrics:</h4>
            <ul>
              {item.metrics.map((metric, metricIndex) => (
                <li key={metricIndex}>
                  {metric.text}: {metric.value} ({metric.type})
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Sections:</h4>
            {item.sections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <strong>{section.description}</strong>: {section.title}
              </div>
            ))}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FetchAndDisplayData;
