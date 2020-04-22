<template>
	<div>
		<div class="panel panel-default">
			<div class="panel-body">
				<div class="row">
					<div class="col-sm-5">
						<h4 class="panel-heading">
							Dashboard
						</h4>
					</div><!--col-->
				</div>

				<hr>

				<div class="row">
					<div class="col-lg-12">
						<highcharts :options="chartOptions"></highcharts>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
    import axios from "axios";

    export default {

        data() {
            return {
                dataReport: [],
	            tmpData: [],
                seriesColor: '#6fcd98',
                colorInputIsSupported: null,
                animationDuration: 1000,
                chartOptions: {
                    chart: {
                        type: 'pie'
                    },
                    title: {
                        text: 'Expense per Category'
                    },
                    series: [{
                        data: [],
                        color: '#6fcd98'
                    }]
                }
            }
        },
        mounted() {
            this.getReport()
        },
        methods: {
            getReport() {
                axios({
                    method: 'GET',
                    url: '/api/report'
                }).then(
                    result => {
                        for (let i = 0; i < Object.keys(result.data).length; i++) {
                            this.chartOptions.series[0].data.push({
	                            name: result.data[i].name,
	                            y: result.data[i].y
                            });
                        }
                    },
                    error => {
                        console.log(error);
                    }
                )
            }
        }
    }
</script>