/* Website */
/* https://codesandbox.io/s/react-data-table-component-typescript-hxk2e?file=/src/index.tsx:268-529 */
import DataTable from 'react-data-table-component';
import data from '../data';
const columns = [
    {
        name: "Title",
        selector: "title",
        sortable: true
    },
    {
        name: "Directior",
        selector: "director",
        sortable: true
    },
    {
        name: "Runtime (m)",
        selector: "runtime",
        sortable: true,
        right: true
    }
];

function MyComponent() {
    return (
        <DataTable
            title="Movies"
            columns={columns}
            data={data}
            defaultSortField="title"
            pagination
            selectableRows
        />
    );
};
export default MyComponent;