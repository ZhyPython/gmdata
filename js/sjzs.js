var Chart = {
    initChart: function(id, option) {
        var myChart = echarts.init(document.getElementById(id));

        defaultOption = {
            title: {
                text: '国有及国有控股企业',
                x: 'center',
                bottom: 5,
                textStyle: {
                    fontSize: 14,
                    color: '#16a1c2'
                }
            },
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            tooltip: {
                formatter: "{a}"
            },
            series: [{
                name: '速度',
                type: 'gauge',
                z: 3,
                center: ['50%', '50%'],
                min: 0,
                max: 220,
                splitNumber: 11,
                radius: '90%',
                axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                        width: 1
                    }
                },
                axisTick: { // 坐标轴小标记
                    length: 5, // 属性length控制线长
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: { // 分隔线
                    length: 10, // 属性length控制线长
                    lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                title: {
                    textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'normal',
                        fontSize: 10,
                        fontStyle: {
                            color: '#16a1c2'
                        }
                    }
                },
                pointer: {
                    width: 2
                },
                detail: {
                    textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'normal',
                        fontSize: 14,
                        color: '#16a1c2'
                    }
                },
                data: [{ value: 40 }]
            }]
        };

        $.extend(defaultOption, option);

        myChart.setOption(defaultOption);
    },


    initChart1: function(id, option) {
        var myChart = echarts.init(document.getElementById(id));

        defaultOption1 = {
            tooltip: {
                formatter: "{a} <br/>{c} {b}"
            },
            series: [{
                    name: '速度',
                    type: 'gauge',
                    z: 3,
                    min: 0,
                    max: 220,
                    splitNumber: 11,
                    radius: '100%',
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            width: 2
                        }
                    },
                    axisTick: { // 坐标轴小标记
                        length: 15, // 属性length控制线长
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    splitLine: { // 分隔线
                        length: 20, // 属性length控制线长
                        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    pointer: {
                        width: 3
                    },
                    title: {
                        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 20,
                            fontStyle: 'italic',
                            color: '#16a1c2'
                        }
                    },
                    detail: {
                        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            color: '#16a1c2'
                        }
                    },
                    data: [{ value: 40 }]
                },
                {
                    name: '转速',
                    type: 'gauge',
                    center: ['20%', '60%'], // 默认全局居中
                    radius: '70%',
                    min: 0,
                    max: 7,
                    endAngle: 45,
                    splitNumber: 7,
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            width: 1
                        }
                    },
                    axisTick: { // 坐标轴小标记
                        length: 12, // 属性length控制线长
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    splitLine: { // 分隔线
                        length: 20, // 属性length控制线长
                        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    pointer: {
                        width: 2
                    },
                    title: {
                        offsetCenter: [0, '-30%'], // x, y，单位px
                    },
                    detail: {
                        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            color: '#16a1c2'
                        }
                    },
                    data: [{ value: 1.5 }]
                },
                {
                    name: '转速',
                    type: 'gauge',
                    center: ['80%', '60%'], // 默认全局居中
                    radius: '70%',
                    min: 0,
                    max: 7,
                    startAngle: 135,
                    endAngle: -45,
                    splitNumber: 7,
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            width: 1
                        }
                    },
                    axisTick: { // 坐标轴小标记
                        length: 12, // 属性length控制线长
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    splitLine: { // 分隔线
                        length: 20, // 属性length控制线长
                        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    pointer: {
                        width: 2
                    },
                    title: {
                        offsetCenter: [0, '-30%'], // x, y，单位px
                    },
                    detail: {
                        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            color: '#16a1c2'
                        }
                    },
                    data: [{ value: 1.5 }]
                }
            ]
        };

        $.extend(defaultOption1, option);

        setInterval(function() {
            defaultOption1.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            defaultOption1.series[1].data[0].value = (Math.random() * 7).toFixed(2) - 0;
            defaultOption1.series[2].data[0].value = (Math.random() * 2).toFixed(2) - 0;
            myChart.setOption(defaultOption1, true);
        }, 2000);

        myChart.setOption(defaultOption1);
    },


    initChart2: function(id, option) {
        var myChart = echarts.init(document.getElementById(id));

        defaultOption2 = {
            title: {
                text: '三大产业增长趋势',
                x: 'center',
                textStyle: {
                    color: '#16a1c2'
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['第一产业', '第二产业', '第三产业'],
                bottom: 10,
                textStyle: {
                    color: '#16a1c2'
                }
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                data: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
                name: '年'
            }],
            yAxis: [{
                type: 'value',
                name: '亿'
            }],
            series: [{
                    name: '第一产业',
                    type: 'bar',
                    data: [60, 78, 87, 95, 109, 120, 137, 143, 154, 163, 169, 180]
                },
                {
                    name: '第二产业',
                    type: 'bar',
                    data: [120, 132, 101, 134, 90, 230, 210, 230, 245, 266, 265, 276]
                },
                {
                    name: '第三产业',
                    type: 'bar',
                    data: [220, 182, 191, 234, 290, 330, 300, 340, 356, 366, 376, 388]
                }
            ]
        };
        $.extend(defaultOption2, option);

        myChart.setOption(defaultOption2);
    },


    initChart3: function(id, option) {
        var myChart = echarts.init(document.getElementById(id));

        defaultOption3 = option = {
            title: {
                text: '小微企业登记、注销趋势',
                x: 'center',
                textStyle: {
                    color: '#16a1c2'
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['登记设立数量', '注销数量'],
                bottom: 10,
                textStyle: {
                    color: '#16a1c2'
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
                name: '年'
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                    name: '注销数量',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210, 230, 245, 266, 265, 276],
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                },
                {
                    name: '登记设立数量',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310, 340, 356, 366, 376, 388],
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                }
            ]
        };

        $.extend(defaultOption3, option);

        myChart.setOption(defaultOption3);
    },



    initChartbing: function(id, option) {
        var myChart = echarts.init(document.getElementById(id));

        defaultOption3 = {
            title: {
                text: '2015年土地招拍挂数量统计',
                x: 'center',
                textStyle: {
                    color: '#16a1c2'
                }
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                bottom: '10',
                data: ['交易成功', '交易失败', '未交易'],
                textStyle: {
                    color: '#16a1c2'
                }
            },
            series: [{
                name: '访问来源',
                type: 'pie',
                radius: '50%',
                center: ['50%', '50%'],
                data: [
                    { value: 335, name: '交易成功' },
                    { value: 310, name: '交易失败' },
                    { value: 1548, name: '未交易' }
                ]
            }]
        };


        $.extend(defaultOption3, option);

        myChart.setOption(defaultOption3);
    }
}