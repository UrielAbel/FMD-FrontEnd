const Logo = ({ size }) => {
  return (
    <svg width={size * 0.82} height={size} viewBox='0 0 41 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M38.3206 12.3064C36.8153 11.9358 35.4238 12.7765 34.3785 13.5493C33.3485 14.3172 32.3932 15.1804 31.525 16.1274C30.6729 17.0459 29.8942 18.0018 29.169 18.9131C28.3356 19.9541 27.4805 21.0355 26.6298 22.1242C26.1925 22.6865 25.7561 23.2498 25.3206 23.814L24.7107 22.8278C23.2962 20.8423 22.0028 19.0645 20.4874 17.4107C18.7096 15.4684 16.9289 14.0655 15.0458 13.1225C13.2361 12.2141 11.2304 11.7659 9.20617 11.8176C7.7196 11.8609 5.55534 12.1882 3.67946 13.506C2.83607 14.0915 2.11104 14.8312 1.5426 15.6862C0.889271 16.7167 0.453095 17.8697 0.260764 19.0746C0.0587614 20.3334 -0.0261909 21.6081 0.00699446 22.8826C0.0214132 24.2913 0.0646691 25.6769 0.107925 26.9645C0.201648 29.7402 0.350161 32.5504 0.54914 35.3173C0.748119 38.0843 0.993239 40.8671 1.29315 43.6067C1.39552 44.5425 1.53538 45.6253 1.90595 46.6519C2.33851 47.8328 2.84028 48.6331 3.50066 49.1723C4.13414 49.7005 4.93101 49.993 5.75576 50C6.12643 50.0001 6.49446 49.9377 6.84438 49.8154C7.5324 49.551 8.17133 49.1733 8.73468 48.698C9.18887 48.3433 9.63585 47.9568 10.1016 47.5199C11.976 45.7565 13.5059 43.7249 14.8756 41.7928C15.5966 40.7705 16.3276 39.7237 17.0298 38.7115C17.7825 37.6243 18.5625 36.4997 19.3368 35.4038C20.8998 33.2064 22.5089 30.996 24.1354 28.8303C24.5295 28.3055 24.9246 27.7816 25.3206 27.2587C25.5859 27.5773 25.8584 27.9061 26.1237 28.2435L26.2102 28.3545C26.5223 28.7651 26.8553 29.1592 27.208 29.5354C28.2505 30.6067 29.3795 31.1849 30.5662 31.2498C31.7528 31.3147 32.9409 30.8259 34.2415 29.7517C35.1284 28.9985 35.93 28.1505 36.6321 27.2226C37.3871 26.268 38.0576 25.2495 38.6363 24.1788C39.8547 21.8992 40.6247 19.5533 40.8597 17.3934C41.0962 15.3041 40.3969 12.8183 38.3206 12.3064ZM21.615 28.7063L21.0959 29.41C19.7131 29.3999 18.3203 29.4172 16.9808 29.7589C15.5029 30.1367 14.1287 30.9023 12.6292 31.1763C11.6485 31.3564 10.6402 31.3205 9.67479 31.071C8.65826 30.8086 7.71527 30.3183 6.74921 29.8973C5.78316 29.4763 4.76375 29.1187 3.72127 29.1461C3.23921 29.1601 2.76476 29.2699 2.32553 29.4691C2.24623 27.697 2.18135 25.9221 2.14674 24.1601V24.0404C2.09899 22.8489 2.11681 21.6556 2.20009 20.466C2.21307 20.3218 2.22749 20.1776 2.24479 20.0406L2.28228 19.7768C2.32842 19.4812 2.38753 19.1928 2.45386 18.9203C2.52398 18.6276 2.60965 18.3388 2.71052 18.0552C2.73214 17.9961 2.75377 17.9355 2.77684 17.8764L2.86912 17.6601C2.90517 17.5822 2.94122 17.5044 2.98015 17.428C3.09305 17.2057 3.21771 16.9896 3.35359 16.7806C3.41127 16.6912 3.47038 16.6046 3.53239 16.521L3.56267 16.4806C3.57853 16.4619 3.5915 16.4475 3.6016 16.4331L3.6088 16.4244C3.6088 16.4244 3.6088 16.4244 3.6088 16.4172V16.4085C3.88589 16.0714 4.19546 15.7623 4.53305 15.4857L4.621 15.4165C4.7104 15.3521 4.80124 15.2887 4.89352 15.2262C5.06943 15.108 5.25399 14.9955 5.44143 14.8917C5.62888 14.7879 5.82209 14.6927 6.01818 14.6033L6.12344 14.5586C6.23591 14.5139 6.34982 14.4707 6.46517 14.4317C6.88217 14.286 7.3091 14.1703 7.74267 14.0857C7.84793 14.0641 7.95463 14.0453 8.05988 14.028L8.21416 14.0049C8.40305 13.9833 8.64673 13.9574 8.9005 13.9429C9.35522 13.9148 9.81124 13.9148 10.266 13.9429C10.4837 13.9574 10.6985 13.9819 10.9206 14.0078L11.072 14.0309C11.1974 14.0511 11.3214 14.0741 11.4469 14.0987C11.8937 14.1867 12.3347 14.3017 12.7676 14.4433C12.9825 14.5154 13.2002 14.5875 13.4064 14.6769L13.5217 14.7273C13.6399 14.7792 13.7567 14.834 13.8721 14.8903C14.3682 15.1339 14.8497 15.4064 15.314 15.7064C15.5418 15.8505 15.7725 16.0077 15.9974 16.1706C16.1056 16.2471 16.2123 16.3264 16.319 16.4057L16.5122 16.5585C17.385 17.263 18.2016 18.0343 18.9547 18.8655C19.3267 19.2707 19.6958 19.696 20.0808 20.1632C20.2611 20.3824 20.4384 20.5958 20.6129 20.8236L20.8465 21.1206L20.8998 21.1913L20.9099 21.2042L21.0238 21.3484C21.6294 22.1443 22.2047 22.9345 22.78 23.7477L23.971 25.5544C23.1693 26.6286 22.3748 27.684 21.615 28.7063ZM38.7733 17.1598C38.7733 17.2477 38.7575 17.3357 38.7474 17.428L38.7171 17.6024C38.6176 18.1648 38.4893 18.7329 38.3364 19.2923C38.1836 19.8518 38.0135 20.378 37.8159 20.9101C37.7698 21.0384 37.7208 21.1653 37.6717 21.2922L37.5895 21.4969L37.4454 21.83C37.3704 22.0001 37.3012 22.1688 37.2161 22.3361C36.7203 23.3711 36.1356 24.361 35.4685 25.2948C35.3892 25.4059 35.3085 25.5169 35.2277 25.6265L35.0691 25.8327C34.8932 26.0547 34.7116 26.2753 34.5284 26.4887C34.1377 26.9415 33.7368 27.3639 33.3389 27.746C33.1168 27.958 32.9063 28.1454 32.6944 28.3156L32.6151 28.3761L32.5069 28.4554C32.3858 28.5391 32.2632 28.6213 32.1378 28.6962C32.0124 28.7712 31.9042 28.8318 31.7831 28.8909L31.7153 28.9226C31.6816 28.9351 31.6488 28.95 31.6173 28.9673L31.5639 28.9875C31.4418 29.0325 31.3171 29.07 31.1905 29.1C31.1573 29.1086 31.1227 29.1158 31.0881 29.1216L31.0074 29.1389H30.9742C30.8345 29.149 30.6943 29.149 30.5546 29.1389L30.4595 29.1259L30.3571 29.1057C30.2388 29.078 30.1223 29.0433 30.0081 29.0019L29.9678 28.9846C29.9202 28.963 29.8726 28.9399 29.8236 28.9154C29.7183 28.8606 29.6102 28.7972 29.5049 28.7294L29.3391 28.6155L29.0752 28.392L29.0363 28.3617C28.9325 28.2666 28.833 28.1699 28.735 28.0733C28.3771 27.6945 28.0401 27.2965 27.7257 26.8809L27.6435 26.7771C27.3349 26.3863 27.0119 25.9985 26.699 25.6236L26.6385 25.5501L27.73 24.137C28.15 23.5968 28.5716 23.0575 28.9945 22.5192L29.639 21.6974C30.9627 20.0031 32.3325 18.2513 33.8897 16.7359C34.3381 16.3033 34.7909 15.8981 35.235 15.5449L35.2724 15.5131C35.3141 15.4875 35.3536 15.4586 35.3907 15.4266L35.4383 15.3891C35.5623 15.2954 35.6891 15.2046 35.816 15.1166C36.0724 14.9358 36.3386 14.7693 36.6134 14.6177C36.6725 14.586 36.7331 14.5557 36.7936 14.5255L36.821 14.5154C36.8461 14.5057 36.8707 14.4946 36.8946 14.4822C37.019 14.4349 37.1461 14.395 37.2752 14.3625L37.3386 14.3481H37.3632C37.3936 14.3483 37.4238 14.3434 37.4526 14.3337H37.4915C37.5318 14.3315 37.5723 14.3315 37.6126 14.3337H37.6905H37.7222C37.79 14.3495 37.8548 14.3712 37.9212 14.3928H37.9341C37.9803 14.4159 38.0264 14.4418 38.0913 14.4808L38.1432 14.426L38.1014 14.4851L38.1187 14.4995C38.1866 14.5618 38.2511 14.6278 38.3119 14.697L38.3523 14.7562C38.4056 14.8398 38.4547 14.9263 38.4965 15.0143L38.5325 15.0892C38.5686 15.1887 38.6032 15.2897 38.6335 15.392C38.6738 15.5362 38.7012 15.6804 38.7286 15.8318V15.8606L38.7531 15.9846C38.7531 16.0394 38.7632 16.0957 38.7676 16.1505C38.7762 16.2644 38.782 16.3783 38.7834 16.4922C38.7918 16.7147 38.7884 16.9376 38.7733 17.1598Z' fill='white' />
      <path d='M19.807 11.3678C20.8541 11.3678 21.703 10.5189 21.703 9.47176C21.703 8.42459 20.8541 7.57568 19.807 7.57568C18.7598 7.57568 17.9109 8.42459 17.9109 9.47176C17.9109 10.5189 18.7598 11.3678 19.807 11.3678Z' fill='white' />
      <path d='M16.7458 5.47914C17.2876 5.47914 17.8173 5.31846 18.2678 5.01743C18.7183 4.71641 19.0695 4.28854 19.2768 3.78795C19.4842 3.28736 19.5384 2.73653 19.4327 2.2051C19.327 1.67368 19.0661 1.18554 18.683 0.802402C18.2998 0.419267 17.8117 0.158348 17.2803 0.0526413C16.7488 -0.0530655 16.198 0.0011868 15.6974 0.208538C15.1968 0.41589 14.769 0.767025 14.4679 1.21754C14.1669 1.66806 14.0062 2.19773 14.0062 2.73957C14.0062 3.46615 14.2949 4.16297 14.8086 4.67674C15.3224 5.1905 16.0192 5.47914 16.7458 5.47914Z' fill='white' />
    </svg>
  )
}

export default Logo
