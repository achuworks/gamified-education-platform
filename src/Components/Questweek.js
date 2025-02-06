import React from 'react';
import { Card } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

const Questweek = () => {
  const data = [
    { date: "Sunday, Feb 2nd", questions: 1 },
    { date: "Monday, Feb 3rd", questions: 0 },
    { date: "Tuesday, Feb 4th", questions: 0 },
    { date: "Wednesday, Feb 5th", questions: 0 },
    { date: "Thursday, Feb 6th", questions: 0 },
    { date: "Friday, Feb 7th", questions: 0 },
    { date: "Saturday, Feb 8th", questions: 0 }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          backgroundColor: '#1e2738',
          padding: '8px',
          border: '1px solid #2a3548',
          borderRadius: '4px'
        }}>
          <p style={{ color: '#fff', margin: '0', fontSize: '14px' }}>{label}</p>
          <p style={{ color: '#fff', margin: '0', fontSize: '14px' }}>
            {'${payload[0].value} questions'}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card style={{ backgroundColor: '#FFFFFF', borderRadius: '8px', padding: '15px', width: '100%', height: '350px', paddingTop: '50px' }}>
      <Card.Body>
        <div style={{ marginBottom: '5px' }}>
          <h4 style={{ color: '#FF0000', marginBottom: '2px', fontSize: '1.2rem' }}>
            1 Questions
          </h4>
          <p style={{ color: '#000080', fontSize: '1rem', margin: '0' }}>
            Answered this week
          </p>
        </div>
        <div style={{ height: '220px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 30, right: 10, left: -25, bottom: 5 }}>
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#a0aec0', fontSize: 12 }}
                hide={true}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#a0aec0', fontSize: 12 }}
                width={30}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="questions"
                stroke="#3182ce"
                strokeWidth={2}
                dot={{ fill: '#3182ce', strokeWidth: 2 }}
                activeDot={{ r: 6, fill: '#3182ce' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Questweek;