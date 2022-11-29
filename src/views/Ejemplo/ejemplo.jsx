import React, { useEffect, useState } from "react";
import isEmpty from "lodash/isEmpty";
import isNil from "lodash/isNil";
import { Table } from "antd";
import LoaderProcess from "../../components/loaderProcess";

const Ejemplo = () => {
  const [data, setData] = useState([]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "TITLE",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "BODY",
      dataIndex: "body",
      key: "body",
      render: (text) => {
        return <span translate="no">{text}</span>;
      },
    },
  ];

  const handlerTranslateText = async (text) => {
    let textTranslated = "";
    if (isEmpty(text) === false) {
      const translate = await fetch(
        "https://translation.googleapis.com/language/translate/v2?source=la&target=es&key=AIzaSyAqdenr1S9NN0LpVzRVP1JQkUL_ux0Qr54",
        {
          method: "POST",
          body: JSON.stringify({ q: text }),
        }
      );
      const translateJson = await translate.json();
      textTranslated =
        isEmpty(translateJson) === false &&
        isNil(translateJson.data) === false &&
        isNil(translateJson.data.translations) === false &&
        isNil(translateJson.data.translations[0]) === false &&
        isEmpty(translateJson.data.translations[0].translatedText) === false
          ? translateJson.data.translations[0].translatedText
          : "";
    }

    return textTranslated;
  };

  const handlerTranslateBody = async (dataArray) => {
    let dataTranslated = [];
    if (isEmpty(dataArray) === false) {
      dataTranslated = await Promise.all(
        dataArray.map(async (item) => {
          const bodyTranslated = await handlerTranslateText(item.body);
          return { ...item, body: bodyTranslated };
        })
      );
    }

    return dataTranslated;
  };

  const handlerGetDataApi = async () => {
    const getItemLocalStorage = localStorage.getItem("data");
    let responseResult = [];
    if (isNil(getItemLocalStorage) === true) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const responseJson = await response.json();
      responseResult = await handlerTranslateBody(responseJson);
      localStorage.setItem("data", JSON.stringify(responseResult));
    } else {
      responseResult = JSON.parse(getItemLocalStorage);
    }
    setData(responseResult);
  };

  useEffect(() => {
    handlerGetDataApi();
  }, []);

  let componentRender = <div />;

  if (isEmpty(data) === false) {
    componentRender = <Table columns={columns} dataSource={data} />;
  } else {
    componentRender = <LoaderProcess />;
  }

  return componentRender;
};

export default Ejemplo;
