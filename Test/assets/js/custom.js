        // based ready dom, initialize echarts instance 
		var myChart = echarts.init(document.getElementById('main'));

        // Specify configurations and data graphs 
        var option = {
    title : {
        text: 'Funnel Plot',
        subtext: 'Fictitious'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    legend: {
        data : ['Show','Click','Access','Advisory','Order Form']
    },
    calculable : true,
    series : [
        {
            name:'Funnel Plot',
            type:'funnel',
            left: '10%',
            top: 60,
            //x2: 80,
            bottom: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort : 'descending',
            gap : 2,
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                },
                emphasis: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            },
            data:[
                {value:60, name:'Access'},
                {value:40, name:'Advisory'},
                {value:20, name:'Order Form'},
                {value:80, name:'Click'},
                {value:100, name:'Show'}
            ]
        }
    ]
};

		// Use just the specified configurations and data charts. 
		myChart.setOption(option);
