import { Card } from "reactstrap";
import DataTable from "react-data-table-component";

const DataTableComponent = (props) => {
  const columns = [
    {
      name: "Category Name",
      selector: "category_name",
    },
    {
      name: "Display Name",
      selector: "display_name",
    },
    {
      name: "Image",
      grow: 0,
      cell: (row) => (
        <img
          height="70px"
          width="56px"
          alt={row?.display_name}
          src={
            row?.image_uri ??
            "https://react.semantic-ui.com/images/wireframe/image.png"
          }
        />
      ),
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: "62px",
      },
    },
    headCells: {
      style: {
        fontSize: 15,
        color: "#ffff",
        fontWeight: "bold",
        paddingLeft: "8px",
        paddingRight: "8px",
        backgroundColor: "#00AFE8",
      },
    },
    cells: {
      style: {
        borderLeft: "1px solid #EEEEEE",
        paddingLeft: "8px",
        paddingRight: "8px",
      },
    },
  };
  return (
    <main className="main">
      <Card className="container">
        <DataTable
          title="Categories"
          columns={columns}
          data={props?.data}
          customStyles={customStyles}
          pagination={true}
          paginationPerPage={5}
          striped={true}
          paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30, 35, 40]}
          highlightOnHover={true}
        />
      </Card>
    </main>
  );
};
export default DataTableComponent;
