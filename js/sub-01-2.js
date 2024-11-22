// 탭 버튼 클릭 이벤트
$('.s2s1_btn li').on('click', function () {
  // 기존 active 클래스 제거
  $('.s2s1_btn li').removeClass('active');
  $('.box').removeClass('active');

  // 클릭한 버튼에 active 클래스 추가
  $(this).addClass('active');

  // 클릭한 버튼에 연결된 박스 활성화
  var tabId = $(this).data('alt'); // data-alt 속성값 가져오기
  $('.box').eq($('.s2s1_btn li').index(this)).addClass('active');
});

document.addEventListener('DOMContentLoaded', () => {
  gsap.from('.s2s1_head', {
    y: 100,
    opacity: 0,
    duration: 2,
    ease: 'power2.out',
    delay: 1,
  });

  gsap.from('.s2s1_btn', {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out',
    delay: 2,
  });

  gsap.from('.dt_img', {
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out',
    delay: 2,
  });

  gsap.from('.box', {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out',
    delay: 3,
  });

  // GSAP ScrollTrigger 애니메이션 적용
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.review').forEach((review, index) => {
    gsap.from(review, {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: index * 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: review.closest('#s3, #s2s3'), // 두 요소 중 하나에 도달했을 때 트리거
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  });

  // #s2s2 전체 섹션 애니메이션
  gsap.from('#s2s2', {
    y: 100, // 아래에서 위로 이동
    opacity: 0, // 투명도 0에서 시작
    duration: 1.5, // 애니메이션 지속 시간
    ease: 'power2.out', // 부드러운 애니메이션 효과
    scrollTrigger: {
      trigger: '#s2s2', // 트리거 대상
      start: 'top 80%', // 트리거 시작 위치 (요소의 상단이 뷰포트의 80%에 도달했을 때 시작)
      toggleActions: 'play none none none', // 스크롤 액션
    },
  });

  // 각 .s2s2_text 요소에 대해 개별 애니메이션 설정
  gsap.utils.toArray('.s2s2_texts').forEach((text, index) => {
    gsap.from(text, {
      y: 100, // 아래에서 위로 이동
      opacity: 0, // 투명도 0에서 시작
      duration: 1, // 애니메이션 지속 시간
      delay: index * 0.7, // 각 텍스트마다 순차적으로 실행되도록 딜레이 설정
      ease: 'power2.out', // 부드러운 애니메이션 효과
      scrollTrigger: {
        trigger: '#s2s2', // 트리거 대상
        start: 'top 80%', // 트리거 시작 위치
        toggleActions: 'play none none none', // 스크롤 액션
      },
    });
  });
});

// 화면 크기별 transform 동작 정의
function applyTransform() {
  const reviews = document.querySelectorAll('.s2s3_content .review');

  if (window.matchMedia('(min-width: 1300px)').matches) {
    // 1300px 이상일 때 transform 적용
    reviews.forEach((review, index) => {
      switch (index) {
        case 1:
          review.style.transform = 'translate(40rem, -5rem)';
          break;
        case 2:
          review.style.transform = 'translate(15rem, -8rem)';
          break;
        case 3:
          review.style.transform = 'translate(45rem, -12rem)';
          break;
        case 4:
          review.style.transform = 'translate(-1rem, -15rem)';
          break;
        case 5:
          review.style.transform = 'translate(35rem, -20rem)';
          break;
        case 6:
          review.style.transform = 'translate(5rem, -24rem)';
          break;
        default:
          review.style.transform = 'none';
      }
    });
  } else {
    // transform 해제
    reviews.forEach((review) => {
      review.style.transform = 'none';
    });
  }
}
applyTransform();
window.addEventListener('resize', applyTransform);

applyResponsiveStyles();

window.addEventListener('resize', applyResponsiveStyles);
