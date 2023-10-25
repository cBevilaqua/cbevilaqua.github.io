function calculate(data) {
  var innerRadius = data[0];
  var wireThickness = data[1];
  var numberOfTurns = data[2];
  var c,a,x,s1,s2,s3,s4,s5,s6,s7;
  c = Math.sqrt(numberOfTurns) * wireThickness;
  a = innerRadius + c/2;
  x = Math.pow(c/2/a, 2);
  s1 = 0.0000004*Math.PI*a;
  s2 = Math.pow(numberOfTurns, 2);
  s3 = s1 * s2;
  s4 = 0.5 + x/12;
  s5 = Math.log(8/x);
  s6 = (s4 * s5) - 0.85 + (0.2 * x);
  data[3] = Math.round(a*100)/100;
  data[4] = Math.round(c*100)/100;
  data[5] = Math.round(s3*s6*1000)/1000;
}
