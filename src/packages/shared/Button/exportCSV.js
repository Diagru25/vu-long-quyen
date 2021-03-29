import { CSVLink } from 'react-csv';

const ExportCSV = ({ data, headers, fileName, text }) => {
    return (
        <CSVLink data={data} headers={headers} filename={fileName}>
            {text}
        </CSVLink>
    );
}

export default ExportCSV;