import React from 'react';
export const Nix = props => (
  <svg viewBox="0 0 20 20" width="16px" height="16px" {...props} className={`ffont ${props.className ? props.className : ''}`}><path d="M11.7255167,39.9464835 C11.7255167,39.9172245 11.4559574,39.4232041 11.1264981,38.8487 C10.7970389,38.2741464 10.5274795,37.7814215 10.5274795,37.7537887 C10.5274795,37.7261559 11.4593265,36.0810653 12.5982179,34.0979438 C13.7371582,32.1149212 14.6865853,30.4533896 14.7080341,30.4057503 C14.7419682,30.3304317 14.5506059,29.9736095 13.2491249,27.6854578 C12.4252662,26.2369659 11.7512356,25.032613 11.7512356,25.0090409 C11.7512356,24.9594376 14.1469377,20.7006071 14.2199028,20.6204819 C14.2604586,20.5759436 14.2779389,20.5824101 14.3255503,20.659564 C14.3569292,20.7104112 15.9783801,23.557142 17.9288485,26.9854871 C24.0618302,37.7662284 25.2598282,39.861961 25.3144785,39.9065299 C25.3437468,39.9303971 25.367693,39.9612993 25.367693,39.9751998 C25.367693,39.9891054 24.2084792,39.9959611 22.791684,39.9904355 C20.5368191,39.9816306 20.2145976,39.9730784 20.2067625,39.9217646 C20.1959382,39.8509702 17.4975555,35.0860301 17.3803217,34.930831 C17.3071853,34.8339351 17.2914767,34.8282531 17.2406206,34.8802779 C17.1732342,34.9492162 14.4048756,39.7653354 14.3523799,39.9049849 L14.3166564,40 L13.0210126,40 C11.953862,40 11.7253688,39.9906306 11.7253688,39.9468025 L11.7255167,39.9464835 Z M28.1382455,27.5057953 C28.1251421,27.4843566 28.254637,27.2221979 28.4260216,26.9232292 C29.1041558,25.7402694 36.6814538,12.4878314 37.8763177,10.3950701 C38.5758517,9.16981928 39.1634407,8.17008751 39.1821472,8.17325686 C39.2176679,8.1793955 41.7149648,12.44247 41.7149648,12.4969432 C41.7149648,12.5141558 41.0527164,13.6806954 40.2433234,15.0891742 C39.4147931,16.5309313 38.7808884,17.6745713 38.792837,17.7059677 C38.8109735,17.7537625 39.2398239,17.7618621 41.7518881,17.7618621 L44.6896862,17.7618621 L44.7834635,17.9084149 C44.8350365,17.9890213 45.1063118,18.4578216 45.3863115,18.9501405 C45.6663014,19.4425089 45.9199945,19.8702424 45.9500718,19.9006582 C46.0191466,19.9705077 46.0189635,19.9723182 45.9343632,20.0563327 C45.8956428,20.0947858 45.6053251,20.5835045 45.2892151,21.1423302 C44.973105,21.7011955 44.6960925,22.1710814 44.6736447,22.1865319 C44.6511871,22.2019578 42.744723,22.203486 40.4371666,22.1899291 L36.2414314,22.1652735 L36.1627673,22.2791225 C36.1195034,22.341739 35.4277497,23.5405237 34.6255063,24.94306 L33.1669888,27.4930991 L31.6502952,27.4930991 C30.8161039,27.4930991 29.6900329,27.5046414 29.1478389,27.518749 C28.5064124,27.5354396 28.1537513,27.5307836 28.1382768,27.5054179 L28.1382455,27.5057953 Z M15.0388155,11.8709967 C9.51766285,11.8655394 5,11.8529591 5,11.8430351 C5,11.8331101 5.55008791,10.8395397 6.22238494,9.63498871 L7.44476988,7.44496802 L10.4154757,7.44496802 C13.0709138,7.44496802 13.3861816,7.43855206 13.3861816,7.38448989 C13.3861816,7.35122657 12.734021,6.17340211 11.9369684,4.76710219 C11.1398865,3.36080227 10.4877552,2.200226 10.4877552,2.18804381 C10.4877552,2.17585568 10.7504294,1.70743173 11.0714854,1.1471105 C11.3925316,0.58677936 11.6594074,0.0994423108 11.6645297,0.0641832946 C11.6729623,0.00609703663 11.7992261,0 12.9937668,0 C13.7197445,0 14.3123285,0.0141174724 14.3106635,0.0313716106 C14.3089495,0.0486257489 14.3323493,0.101386509 14.3626548,0.148617744 C14.3929622,0.195847988 15.3187907,1.82609515 16.4200733,3.77138262 C17.5213068,5.71667008 18.4484037,7.33908004 18.480332,7.37661703 C18.5345965,7.44066959 18.7299313,7.44500961 21.5583798,7.44500961 L24.5785452,7.44500961 L25.8415751,9.6382987 C26.5362317,10.8446325 27.0951048,11.8470384 27.0836459,11.8659554 C27.0721086,11.8848339 26.6158763,11.8959137 26.0697745,11.8905813 C25.5237021,11.8852528 20.5595911,11.8764222 15.0388302,11.870967 L15.0388155,11.8709967 Z" fillRule="evenodd" />,
<path d="M0.621553152,18.9141537 C0.0244816123,19.9602916 -0.0333800389,20.0739871 0.0121260448,20.1103341 C0.039785089,20.13247 0.323462848,20.6098815 0.642680977,21.1712286 C0.961908895,21.7325361 1.23169496,22.1967666 1.2421316,22.2029069 C1.25256628,22.2089977 2.57216634,22.2180548 4.17447393,22.2231404 C5.77678151,22.228221 7.11092825,22.2459815 7.13941851,22.2626129 C7.18569999,22.2896434 7.03363253,22.5690066 5.70638807,24.8944474 L4.22156607,27.4960753 L5.48522145,29.6615401 C6.18032492,30.8525704 6.75621969,31.8310654 6.76463949,31.8360173 C6.77313957,31.8409791 9.04160805,27.8912367 11.805946,23.058878 C12.9173596,21.1160506 13.8828953,19.4302266 14.7794083,17.8651299 C17.0612721,13.8588468 17.7831231,12.5697688 17.7879204,12.5040076 C17.6805973,12.4931134 17.1867075,12.4854915 16.5145725,12.4825817 C16.1283582,12.4816904 15.7489874,12.4805911 15.266386,12.4823837 L12.7852863,12.4915546 L11.2756944,15.1364621 C9.87986771,17.5820061 9.76345907,17.7771109 9.6819045,17.7966214 C9.68182813,17.7966798 9.67966248,17.8002165 9.67962332,17.8002264 C9.67848762,17.8005235 9.52091008,17.8001372 9.50093753,17.8003244 C9.08081887,17.8064152 7.49849362,17.8064648 5.56262487,17.7993241 C3.34684672,17.7911337 1.48832265,17.7868959 1.4327128,17.7898165 C1.37713233,17.792748 1.32035742,17.7868651 1.30644517,17.7767435 C1.292529,17.7666188 0.984329062,18.2784598 0.621465038,18.9141943 L0.621553152,18.9141537 Z M20.7076722,0.0672319121 C20.6955849,0.0819628167 21.2578083,1.09643428 21.9570335,2.32163276 C23.1513724,4.41440367 30.7090244,17.6754861 31.3829021,18.8609703 C31.5300038,19.1197565 31.668725,19.3366496 31.7199487,19.3906253 C31.8080276,19.2669269 32.0657185,18.8330416 32.4987215,18.0814426 C32.785308,17.5597701 33.1576785,16.8918978 33.4825653,16.3225287 L34.1293627,15.1892374 C34.1970862,15.0502475 34.2031044,15.0091567 34.1932591,14.979584 C34.1774397,14.9320735 33.5173646,13.758248 32.7264516,12.3712215 C31.9355778,10.984195 31.275113,9.81118952 31.2587629,9.76454265 C31.2557181,9.75584712 31.25516,9.74441219 31.2578818,9.72830664 L31.2161861,9.63788797 L33.3344513,5.97586074 C33.6957684,5.35119868 33.9634985,4.8822837 34.2616769,4.36253254 C35.1582779,2.78307532 35.4400573,2.26401743 35.4262528,2.22826473 C35.4138903,2.19619426 35.1618906,1.74979259 34.8661696,1.23620159 C34.5704486,0.722620495 34.293956,0.231164478 34.251857,0.144209158 C34.204574,0.046447808 34.1799989,0.00910158757 34.1442207,0 C34.1388947,0.00139742547 34.1361044,0.0017727793 34.1300548,0.00341284774 C34.0889799,0.0145437229 33.5960241,0.0227945745 33.0345997,0.0218210314 C32.4731458,0.0208504595 31.9361094,0.0241107888 31.8413377,0.0289755329 L31.6690353,0.0377819874 L30.2006613,2.61058984 C28.945132,4.81042078 28.7238675,5.18201116 28.6738382,5.17398909 C28.6715179,5.17362265 28.6592377,5.15534718 28.6508688,5.14416975 C28.6402099,5.15076667 28.631233,5.15315151 28.6242886,5.14909491 C28.5992417,5.13446602 27.9248872,3.97044427 27.12576,2.56242174 L25.7198491,0.0848883977 C25.7085186,0.0663980125 25.6763658,0.0111784134 25.6750519,0.0104108693 C25.6284003,-0.016835461 20.730671,0.0387644438 20.7076634,0.0668020874 L20.7076722,0.0672319121 Z M18.882142,28.1038851 C18.8775111,28.1146376 18.8796063,28.1298122 18.8862932,28.1514817 C18.9184362,28.2554914 21.3670013,32.4828074 21.4094919,32.5075669 C21.4296897,32.5193633 22.7975841,32.5312667 24.4494315,32.5339813 C27.0586885,32.5382696 27.4599017,32.5489588 27.5073855,32.6163333 C27.5374647,32.658984 28.4852376,34.3211726 29.6136083,36.3100527 C30.7419791,38.2989328 31.6844876,39.9375157 31.7081805,39.951381 C31.7318607,39.9652106 32.2884516,39.9754234 32.94501,39.9741627 C33.6015391,39.9729148 34.1591257,39.9839476 34.1841893,39.9985726 C34.1970627,40.0060796 34.2215516,39.9845736 34.2675551,39.9198443 L34.855776,38.8892554 C35.3682188,37.9914071 35.5039342,37.732096 35.4720173,37.7118923 C35.4156908,37.6761742 33.9449984,35.0732242 33.1361101,33.6036001 C32.833575,33.063863 32.6103034,32.661145 32.6033815,32.635613 C32.5842617,32.5650604 32.5970275,32.5541543 32.7165397,32.5385539 C32.9080412,32.5135527 38.3359732,32.532879 38.401961,32.5588042 C38.425181,32.5679157 38.4792528,32.5025021 38.6558375,32.2124685 C38.8385472,31.9086993 39.1483273,31.3682591 39.7328866,30.3440185 C40.4397289,29.1055489 41.0098571,28.0875379 40.9998708,28.0816946 C40.9899227,28.0758811 40.9243931,28.0766338 40.8541103,28.0833089 C40.8540555,28.0833149 40.8496948,28.0833812 40.8496165,28.0833862 C40.4137744,28.1035404 37.5288864,28.1035057 26.1893734,28.085872 C22.3749102,28.0799496 19.3569992,28.0769883 19.1488539,28.0787314 C19.0390734,28.0797218 18.9437534,28.0862088 18.8883198,28.0957838 C18.8857841,28.0981805 18.8836497,28.1008545 18.882328,28.1039643 L18.882142,28.1038851 Z" fillRule="evenodd" /></svg>
);