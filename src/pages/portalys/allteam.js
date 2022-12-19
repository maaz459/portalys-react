import React from "react";
import {
  Box,
  Text,
  VStack,
  Image,
  Progress as LinearProgress,
  Heading,
  chakra,
} from "@chakra-ui/react";
import a from "../../static/assets/images/a.svg";
import b from "../../static/assets/images/b.svg";
import c from "../../static/assets/images/c.svg";
import d from "../../static/assets/images/d.svg";
import e from "../../static/assets/images/e.svg";
import f from "../../static/assets/images/f.svg";
import g from "../../static/assets/images/g.svg";
import h from "../../static/assets/images/h.svg";
import i from "../../static/assets/images/i.svg";
import j from "../../static/assets/images/j.svg";
import k from "../../static/assets/images/k.svg";
import l from "../../static/assets/images/l.svg";
import m from "../../static/assets/images/m.svg";
import n from "../../static/assets/images/n.svg";
import o from "../../static/assets/images/o.svg";
import p from "../../static/assets/images/p.svg";
import q from "../../static/assets/images/q.svg";
import r from "../../static/assets/images/r.svg";
import s from "../../static/assets/images/s.svg";
import t from "../../static/assets/images/t.svg";
import u from "../../static/assets/images/u.svg";
import v from "../../static/assets/images/v.svg";
import w from "../../static/assets/images/w.svg";

export default function AllTeam() {
  const team = [
    {
      img: a,
      para: "Atlanta United FC",
    },
    {
      img: b,
      para: "Orlando City SC",
    },
    {
      img: a,
      para: "Atlanta United FC",
    },
    {
      img: c,
      para: "San Jose Earthquakes",
    },
    {
      img: d,
      para: "CF Montreal",
    },
    {
      img: e,
      para: "Philadelphia Union",
    },
    {
      img: f,
      para: "CF Montreal",
    },
    {
      img: g,
      para: "Sporting Kansas City",
    },
    {
      img: e,
      para: "Austin FC",
    },
    {
      img: f,
      para: "Portland Timbers",
    },
    {
      img: g,
      para: "Austin FC",
    },
    {
      img: h,
      para: "Seattle Sounders FC",
    },
    {
      img: i,
      para: "Colorado Rapids",
    },
    {
      img: j,
      para: "Philadelphia Union",
    },
    {
      img: k,
      para: "Columbus Crew",
    },
    {
        img: p,
        para: "Sporting Kansas City",
      },
    {
      img: l,
      para: "Seattle Sounders FC",
    },
    {
      img: m,
      para: "Columbus Crew",
    },
    {
        img: i,
        para: "Colorado Rapids",
      },
    {
      img: n,
      para: "Portland Timbers",
    },
    {
      img: o,
      para: "FC Dallas",
    },
    {
      img: p,
      para: "Sporting Kansas City",
    },
    {
      img: q,
      para: "FC Dallas",
    },
    {
      img: r,
      para: "Orlando City SC",
    },
  ];
  return (
    <Box paddingBottom="50px">
      <Heading color="#FBFAFB" fontSize="35px" paddingTop="60px">
        All Teams
      </Heading>
      <Box display="flex" flexWrap="wrap"  gap="30px" justifyContent="space-between" paddingTop="60px">
        {team.map((item, index) => {
          return (
            <>
              <Box key={index} display="flex" gap="17px" alignItems="center" width="250px">
                <Image src={item.img} />
                <Text color="#FBFAFB" fontSize="17px">
                  {item.para}
                </Text>
              </Box>
            </>
          );
        })}
      </Box>
    </Box>
  );
}
