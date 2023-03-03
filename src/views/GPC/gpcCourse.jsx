import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import isNil from "lodash/isNil";
import isEmpty from "lodash/isEmpty";

const GPCCourse = () => {
  const [dataPib, setDataPib] = useState([]);
  const handlerGetPibWorld = async () => {
    try {
      const response = await fetch(
        "https://nodejs-bq-function-o34wpb566q-uc.a.run.app/",
        {
          method: "GET",
        }
      );
      const responseJson = await response.json();
      setDataPib(responseJson);
    } catch (error) {}
  };

  useEffect(() => {
    handlerGetPibWorld();
  }, []);

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          title: {
            text: "PIB MUNDIAL",
          },
          legend: {
            layout: "vertical",
            align: "right",
            verticalAlign: "middle",
            symbolPadding: 0,
            symbolWidth: 0,
            symbolHeight: 0,
            symbolRadius: 0,
            useHTML: true,
            labelFormatter: function () {
              const splitName = this.name.split(",");
              const countryCode = splitName[1];
              const countryName = splitName[0];
              return `<div><span class="flag-icon flag-icon-${
                countryName === "Korea" ? "kor" : countryCode
              }"></span><span> ${countryName}</span></div>`;
            },
          },
          xAxis: {
            categories:
              isEmpty(dataPib) === false &&
              isNil(dataPib[0]) === false &&
              isNil(dataPib[0].categories) === false
                ? dataPib[0].categories
                : [
                    "1977",
                    "1978",
                    "1979",
                    "1980",
                    "1980",
                    "1981",
                    "1982",
                    "1983",
                    "1984",
                    "1985",
                    "1986",
                  ],
          },
          series: dataPib,
        }}
      />
    </div>
  );
};

export default GPCCourse;
