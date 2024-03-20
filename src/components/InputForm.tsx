import React, { useState} from 'react';
import QRCode from 'qrcode.react';

interface InputFieldProps {
  onSubmit: (url: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ onSubmit }) => {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState<string | null>(null);


  const handleSubmit = async () => {
    try {
      
      const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 4983503600cd372e1db5fbf4f6910191646b54e2', 
        },
        body: JSON.stringify({ long_url: url }),
      });
      if (response.ok) {
        const data = await response.json();
        setShortenedUrl(data.link);
        onSubmit(data.link);
      } else {
        console.error('Failed to shorten URL:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to shorten URL:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  
 

  return (
    <div className="input-field-container">
   
      <input
        type="text"
        value={url}
        onChange={handleInputChange}
        className="input-field-input"
        placeholder='Enter your URL here...'
      />
      <button onClick={handleSubmit} className="input-field-button">
        Shorten
      </button>

     

    

{shortenedUrl && (
        <div className="table-container">
          <table className="url-table">
            <tbody>
              <tr>
                <td>Original URL:</td>
                <td>{url}</td>
              </tr>
              <tr>
                <td>Shortened URL:</td>
                <td>{shortenedUrl}</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <div className="qr-code-container">
                    <QRCode value={shortenedUrl} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default InputField;

