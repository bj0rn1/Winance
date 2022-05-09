import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
const DonutChart = (teArdhurat) => {
  let table = useSelector((state) => state.table);

  const [active, setActive] = useState(null);
  const [total, setTotal] = useState(0);
  const width = 400;
  const half = width / 2;

  const teMbetura = teArdhurat.teArdhurat - total;
  let secondTable = [...table];

  useEffect(() => {
    table[0].leket = teMbetura;
    setTotal(
      table.slice(1, table.length).reduce((n, { leket }) => {
        return n + leket;
      }, 0)
    );
    console.log(table.slice(1, table.length));
  }, []);

  return (
    <main>
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={table}
            outerRadius={half}
            innerRadius={({ data }) => {
              const size =
                active && active.kategoria == data.kategoria ? 12 : 8;
              return half - size;
            }}
            pieValue={(data) => data.leket}
            padAngle={0.05}
          >
            {(pie) => {
              return pie.arcs.map((arc) => {
                return (
                  <g
                    key={arc.data.kategoria}
                    onMouseEnter={() => setActive(arc.data)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <path d={pie.path(arc)} fill={arc.data.color}></path>
                  </g>
                );
              });
            }}
          </Pie>
          {active ? (
            <>
              <Text
                textAnchor="middle"
                fill={active.color}
                fontSize={40}
                dy={-20}
              >
                {`${active.kategoria}`}
              </Text>

              <Text textAnchor="middle" fill="#fff" fontSize={20} dy={20}>
                {` ${active.leket} leke te reja`}
              </Text>
            </>
          ) : (
            <>
              <Text textAnchor="middle" fill="#fff" fontSize={40} dy={-20}>
                {`${total} leke te reja`}
              </Text>

              <Text textAnchor="middle" fill="#aaa" fontSize={20} dy={20}>
                {`${table.length} kategori`}
              </Text>
            </>
          )}
        </Group>
      </svg>
    </main>
  );
};

export default DonutChart;
