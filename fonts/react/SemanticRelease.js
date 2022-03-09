import React from 'react';
export const SemanticRelease = props => (
  <svg viewBox="0 0 20 20" width="16px" height="16px" {...props} className={`ffont ${props.className ? props.className : ''}`}><path d="M14.8740275,40.628547 C9.86441569,37.7218092 5.59258333,35.1772393 5.38121072,34.9741272 C5.02540826,34.6321409 4.99707947,33.8131166 5.00020552,23.9581318 C5.00196291,18.1025436 5.07618304,13.2011286 5.16493038,13.0658826 C5.30088265,12.8589156 23.7802975,2 23.9957194,2 C24.2119673,2 42.6904525,12.8588832 42.8265084,13.0658826 C43.1014872,13.4844975 43.0294261,34.5303257 42.7518591,34.8639867 C42.5610568,35.0938888 34.6497283,39.7555214 24.8669827,45.4023286 L23.9816959,45.9133482 L14.8740275,40.628547 Z M27.0022802,42.4959147 C28.6103965,41.5744597 30.0991724,40.6244977 30.310545,40.3849421 C31.1474347,39.4365836 30.6701538,36.7522487 29.0275051,33.1686326 C28.4713279,31.9552728 28.0735587,30.9052449 28.1435951,30.8352733 C28.4943278,30.4845406 33.0025736,34.2925518 33.9282398,35.721301 C35.3527455,37.9202241 34.8905926,37.8711468 37.9169463,36.1441272 C39.3888609,35.3041438 40.7875645,34.4400267 41.0253384,34.2239569 C41.4205161,33.8646073 41.4574456,33.5321125 41.4574456,30.333891 C41.4574456,26.3422691 41.519249,26.4886912 39.3767616,25.404617 C38.1892363,24.8037842 34.9912254,24.1975741 32.9592948,24.1881473 C32.4530048,24.1857988 31.9802914,24.0892476 31.9088135,23.9735839 C31.74404,23.7069629 32.4513527,23.3476942 35.1976417,22.3030114 C36.9283056,21.6447112 37.813155,21.4411619 39.3708335,21.3431044 L41.3475318,21.2186537 L41.3475318,13.7610069 L38.6060048,12.1635321 C37.0981487,11.2849185 35.6778867,10.5660572 35.4499931,10.5660572 C34.7070467,10.5660572 32.4703681,12.110697 31.5168428,13.2823168 C31.0043978,13.9119642 30.1403455,15.0873255 29.5966724,15.8941048 C29.0530642,16.7009327 28.5199679,17.3641891 28.412014,17.3680117 C28.1368895,17.3777623 28.420971,14.6379846 28.9436688,12.2409706 C29.2151813,10.9957996 29.6296012,9.83601999 30.0378014,9.17874025 C30.3991919,8.59690677 30.6948868,7.99319096 30.6948868,7.83718016 C30.6948868,7.58223726 24.4087787,3.75728385 23.9899208,3.75728385 C23.6979513,3.75728385 17.792897,7.26801284 17.5084753,7.61058224 C17.328023,7.82802878 17.272726,8.51744363 17.3374174,9.74325899 C17.4215858,11.3378345 17.5713688,11.8699428 18.5891644,14.1903443 C19.2250315,15.6399717 19.7979889,16.9495263 19.8624049,17.1006455 C20.1223042,17.7099332 19.4023415,17.2902492 17.335328,15.6275647 C14.847448,13.6264087 14.1138798,12.8470026 13.343706,11.3869928 C13.0419048,10.814829 12.6959664,10.3543283 12.5749576,10.3636417 C12.4539488,10.372955 11.0700332,11.1420922 9.49960762,12.0727633 L6.64421471,13.76504 L6.64421471,21.4340594 L7.84923295,22.1541354 C9.43318317,23.1006474 10.0951277,23.2743779 13.2334845,23.5673031 C14.6831119,23.7026091 15.9546032,23.8883141 16.0590747,23.9799899 C16.302955,24.1939702 15.5190136,24.5890831 12.7940563,25.6256188 C11.0633924,26.2839189 10.1785429,26.4874683 8.62086446,26.5855258 L6.64416612,26.7099765 L6.58387876,30.2655715 C6.51267616,34.4651646 6.19909962,33.9326028 10.030953,36.1190541 L12.6633114,37.6210792 L13.8204347,36.9976191 C15.2813839,36.2104545 16.3447582,35.1232866 18.0287743,32.6951741 C18.7618566,31.6381491 19.4406947,30.7733841 19.5372944,30.7733841 C19.8094711,30.7733841 19.7498008,31.6083788 19.2759537,34.4305352 C18.9471194,36.3890927 18.6475048,37.41097 18.0652988,38.5601567 C17.4099951,39.8535303 17.3376749,40.1332386 17.5926988,40.3883273 C17.9047042,40.7003327 23.6603075,44.121119 23.9273983,44.1533513 C24.0105171,44.1633611 25.3942594,43.4176774 27.0024243,42.4962224 L27.0022802,42.4959147 Z M22.4583359,28.0297676 C21.2605254,27.6097273 20.0193714,26.1816745 19.7485553,24.9118191 C19.0044427,21.4229563 22.5581103,18.5087678 25.7529952,19.9878901 C28.5544516,21.2848919 29.2240412,24.7242563 27.1039334,26.9254469 C25.790945,28.2886626 24.2448151,28.6562728 22.4584331,28.0297676 L22.4583359,28.0297676 Z M25.0563564,26.7396982 C25.4507242,26.5749247 26.0405915,26.122555 26.3671581,25.7344554 C27.512911,24.3728109 26.970631,22.0198045 25.3318535,21.24218 C23.231409,20.2454246 21.0305423,21.6709668 21.0305423,24.0282492 C21.0305423,25.1792662 21.7584092,26.2388342 22.886572,26.7302553 C23.7488427,27.1058344 24.1753456,27.1076809 25.0563402,26.7396172 L25.0563564,26.7396982 Z" fillRule="evenodd" /></svg>
);
