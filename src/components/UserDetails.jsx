import React from "react";

import { Table } from "antd";

const Details = ({ userDetails }) => {
  const columns = [
    {
      title: "Street",
      dataIndex: "street",
      key: "street",
      width: 100,
      fixed: "left",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Postcode",
      dataIndex: "postcode",
      key: "postcode",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Cell",
      dataIndex: "cell",
      key: "cell",
      width: 100,
      fixed: "right",
    },
  ];
  return (
    <Table dataSource={userDetails} columns={columns} pagination={false} />
  );
};

export default Details;
