<template>
	<div class="logo-box">
		<canvas ref="can" id="can"></canvas>
		<svg ref="mysvg">
		  <path></path>
		  <path></path>
		</svg>
		
	</div>
</template>
<script>
	export default {
		props:{},
		data () {
			return {

			};
		},
		methods: {
			a(){
				var a=1;
				console.log(a)
			},
			canvas(obj,w){  
				var can=this.$refs[obj];
				var ctx=can.getContext('2d')
				

				var logoWidth=w; //logo宽度400
				var cap=w/2
				var p=w/10; //四边填充

				//重设画板宽高
				can.setAttribute('width', w+2*p );
				can.setAttribute('height',1.72*cap+2*p );
				// console.log(x9)


				// 设置9个点的位置
				/*
					(0,0)
					(0.4*cap,0)
					(0.76*cap,0)
					(w-0.76*cap,0)
					(w-0.4*cap,0)
					(w,0)

					(cap,0.24*cap*1.72)

					(cap,0.6*cap*1.72)

					(cap,cap*1.72)
				 */
				 var x1=0+p,
				 	 x2=0.4*cap+p,	
				 	 x3=0.76*cap+p,	
				 	 x4=w-0.76*cap+p,	
				 	 x5=w-0.4*cap+p,	
				 	 x6=w+p,

				 	 x7=cap+p,
				 	 x8=cap+p,
				 	 x9=cap+p,	

				 	 y7=0.24*cap*1.72+p,
				 	 y8=0.6*cap*1.72+p,
				 	 y9=cap*1.72+p


				//绘制绿色v
				ctx.beginPath();
				ctx.fillStyle="rgb(63,183,131)";

				ctx.moveTo(x1,p);
				ctx.lineTo(x9,y9);
				ctx.lineTo(x6,p);
				ctx.lineTo(x5,p);
				ctx.lineTo(x8,y8);
				ctx.lineTo(x2,p);
				
				ctx.fill();  //填充 内容
				// ctx.stroke();  //描边线
				ctx.closePath();



				//绘制黑色v
				ctx.beginPath();

					ctx.fillStyle="#35495e";//填充颜色

					ctx.moveTo(x2,p);
					ctx.lineTo(x8,y8);
					ctx.lineTo(x5,p);
					ctx.lineTo(x4,p);
					ctx.lineTo(x7,y7);
					ctx.lineTo(x3,p);
					
					ctx.fill();  //填充

				ctx.closePath();
			},//drawVue('#can',400)
			svg(obj,w){
				var svg=this.$refs[obj];
				var  v1=svg.getElementsByTagName('path')[0],
					 v2=svg.getElementsByTagName('path')[1]


				console.log(svg)
				

				var logoWidth=w; //logo宽度400
				var cap=w/2
				var p=w/10; //四边填充

				//重设画板宽高
				svg.setAttribute('width', w+2*p );
				svg.setAttribute('height',1.72*cap+2*p );
				console.log(p)


				// 设置9个点的位置
				/*
					(0,0)
					(0.4*cap,0)
					(0.76*cap,0)
					(w-0.76*cap,0)
					(w-0.4*cap,0)
					(w,0)

					(cap,0.24*cap*1.72)

					(cap,0.6*cap*1.72)

					(cap,cap*1.72)
				 */
				 var x1=0+p,
				 	 x2=0.4*cap+p,	
				 	 x3=0.76*cap+p,	
				 	 x4=w-0.76*cap+p,	
				 	 x5=w-0.4*cap+p,	
				 	 x6=w+p,
				 	 x7=cap+p,
				 	 x8=cap+p,
				 	 x9=cap+p,	
				 	 y7=0.24*cap*1.72+p,
				 	 y8=0.6*cap*1.72+p,
				 	 y9=cap*1.72+p
				//绘制绿色v
				var color1="rgb(63,183,131)";
				var path1="M "+x1+','+p+" L "+x9+','+y9+" L "+x6+','+p+" L "+x5+','+p+" L "+x8+','+y8+" L "+x2+','+p+'Z';
				v1.setAttribute('d', path1);
				v1.setAttribute('fill', color1);

				//绘制黑色v

				var color2="#35495e";//填充颜色
				var path2="M "+x2+","+p+" L "+x8+","+y8+" L "+x5+","+p+" L "+x4+","+p+" L "+x7+","+y7+" L "+x3+","+p+"Z"
				v2.setAttribute('d', path2);
				v2.setAttribute('fill', color2);
				// svgVue('.mysvg',400)
			}
		},
		mounted(){
			
			// this.a()

			this.canvas('can',400);
			this.svg('mysvg',160);
		}
	};

</script>
<style scoped lang="scss">
.logo-box{
	canvas{
		width: 400px;
	}
	svg{
		width: 400px;
	}
}
</style>