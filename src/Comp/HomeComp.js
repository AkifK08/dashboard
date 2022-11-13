import React from 'react'
import { TitleCard } from '../Component.js/TitleCard'
import { COLORS, FONTS, SIZES } from '../Theme/Theme'
import useMediaQuery from '../utils/useMediaQuery'
import { AiOutlineHeart, AiOutlineHome, AiOutlineSetting, AiOutlineUser, AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer, Bar, BarChart } from 'recharts';
export default function HomeComp() {
    const matches = useMediaQuery('(min-width:819px)')
    const mobile = useMediaQuery('(min-width:600px)')
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div style={{
                    backgroundColor: COLORS.white,
                    ...FONTS.h3,
                    padding: "2px",
                    borderRadius: "2px"
                }}>
                    <p className="label">{`${label} : ${payload[0].value} ${"User"}`}</p>
                </div>
            );
        }

        return null;
    };

    const pdata = [
        {
            name: 'Jan',
            student: 11,
            fees: 120
        },
        {
            name: 'Feb',
            student: 15,
            fees: 12
        },
        {
            name: 'Mar',
            student: 5,
            fees: 10
        },
        {
            name: 'April',
            student: 10,
            fees: 5
        },
        {
            name: 'May',
            student: 9,
            fees: 4
        },
        {
            name: 'June',
            student: 10,
            fees: 8
        },
        {
            name: 'July',
            student: 3,
            fees: 5
        },
        {
            name: 'Aug',
            student: 20,
            fees: 5
        },
        {
            name: 'Sept',
            student: 10,
            fees: 5
        },
        {
            name: 'Oct',
            student: 0,
            fees: 5
        },
        {
            name: 'Nov',
            student: 0,
            fees: 5
        }, {
            name: 'Dec',
            student: 0,
            fees: 5
        },
    ];
    const Wdata = [
        {
            name: 'Sun',
            student: 11,
            fees: 120
        },
        {
            name: 'Mon',
            student: 15,
            fees: 12
        },
        {
            name: 'Tue',
            student: 5,
            fees: 10
        },
        {
            name: 'Wed',
            student: 10,
            fees: 5
        },
        {
            name: 'Thu',
            student: 9,
            fees: 4
        },
        {
            name: 'Fri',
            student: 10,
            fees: 8
        },
        {
            name: 'Sat',
            student: 3,
            fees: 5
        },
    ];
    return (

        <div style={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.white,
            ...FONTS.body2,
            paddingBlockStart: 20,
            paddingBlockEnd: 70
        }}>
            <div style={{
                height: "3px",
                width: "88%",
                backgroundColor: COLORS.lightGray1
            }} />
            <TitleCard
                Icon={AiOutlineUser}
                label={"Active Users"}
                onPress={() => {
                    // alert("Active User")
                }}
                appendComponent={
                    <LineChart width={mobile ? !matches ? 700 : 900 : 350} height={400} data={pdata} margin={{ top: 25, right: 30, bottom: mobile ? 10 : 50, left: -15 }} >
                        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.transparentPrimary} />
                        <XAxis dataKey={"name"} angle={matches ? 0 : -270} tickMargin={matches ? 10 : 30} style={{
                            ...FONTS.h4,
                            backgroundColor: COLORS.Primary
                        }}
                        />
                        <YAxis
                            style={{
                                ...FONTS.h4,

                            }}
                        />

                        <Tooltip content={<CustomTooltip />} />
                        {/* <Legend/> */}
                        <Line type="monotoneX" dataKey="student" stroke={COLORS.Primary} strokeWidth={2}
                            dot={{ stroke: COLORS.Primary, strokeWidth: 1, r: 5, strokeDasharray: '' }}

                        />
                    </LineChart>
                }
            />
            <div style={{
                height: "3px",

                width: "88%",
                backgroundColor: COLORS.lightGray1
            }} />
            <TitleCard
                Icon={AiOutlineUser}
                label={"New Users"}
                onPress={() => {
                    // alert("Active User")
                }}
                appendComponent={
                    <div style={{
                        display: "flex",
                        // alignItems:"center",
                        flexDirection: !mobile ? "column" : "row"
                    }}>

                        <LineChart width={mobile ? !matches ? 700 : 500 : 350} height={400} data={Wdata} margin={{ top: 25, right: 30, bottom: mobile ? 10 : 50, left: -15 }} >
                            <CartesianGrid strokeDasharray="3 3" stroke={COLORS.transparentPrimary} />
                            <XAxis dataKey={"name"} angle={matches ? 0 : -270} tickMargin={matches ? 10 : 30} style={{

                                ...FONTS.h4,
                                backgroundColor: COLORS.Primary
                            }}
                            />
                            <YAxis
                                style={{
                                    ...FONTS.h4,

                                }}
                            />

                            <Tooltip content={<CustomTooltip />} />
                            {/* <Legend/> */}
                            <Line type="monotoneX" dataKey="student" stroke={COLORS.Primary} strokeWidth={2}
                                dot={{ stroke: COLORS.Primary, strokeWidth: 1, r: 5, strokeDasharray: '' }}

                            />
                        </LineChart>
                        <div style={{
                            // height: 2.5,
                            width: "2.5px",
                            backgroundColor: COLORS.lightGray1
                        }} />
                        <LineChart width={mobile ? !matches ? 700 : 500 : 350} height={400} data={Wdata} margin={{ top: 25, right: 30, bottom: mobile ? 10 : 50, left: -15 }} >
                            <CartesianGrid strokeDasharray="3 3" stroke={COLORS.transparentPrimary} />
                            <XAxis dataKey={"name"} angle={matches ? 0 : -270} tickMargin={matches ? 10 : 30} style={{

                                ...FONTS.h4,
                                backgroundColor: COLORS.Primary
                            }}
                            />
                            <YAxis
                                style={{
                                    ...FONTS.h4,

                                }}
                            />

                            <Tooltip content={<CustomTooltip />} />
                            {/* <Legend/> */}
                            <Line type="monotoneX" dataKey="student" stroke={COLORS.Primary} strokeWidth={2}
                                dot={{ stroke: COLORS.Primary, strokeWidth: 1, r: 5, strokeDasharray: '' }}

                            />
                        </LineChart>
                    </div>
                }
            />
            <div style={{
                height: "3px",
                width: "88%",
                backgroundColor: COLORS.lightGray1
            }} />
            <TitleCard
                Icon={AiOutlineUser}
                label={"Animals"}
                onPress={() => {
                    // alert("Active User")
                }}
                appendComponent={
                    <LineChart width={mobile ? !matches ? 700 : 900 : 350} height={400} data={pdata} margin={{ top: 25, right: 30, bottom: mobile ? 10 : 50, left: -15 }} >
                        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.transparentPrimary} />
                        <XAxis dataKey={"name"} angle={matches ? 0 : -270} tickMargin={matches ? 10 : 30} style={{
                            ...FONTS.h4,
                            backgroundColor: COLORS.Primary
                        }}
                        />
                        <YAxis
                            style={{
                                ...FONTS.h4,

                            }}
                        />

                        <Tooltip content={<CustomTooltip />} />
                        {/* <Legend/> */}
                        <Line type="monotoneX" dataKey="student" stroke={COLORS.Primary} strokeWidth={2}
                            dot={{ stroke: COLORS.Primary, strokeWidth: 1, r: 5, strokeDasharray: '' }}

                        />
                    </LineChart>
                }
            />
            <div style={{
                height: "3px",
                width: "88%",
                backgroundColor: COLORS.lightGray1
            }} />

        </div>


    )
}

