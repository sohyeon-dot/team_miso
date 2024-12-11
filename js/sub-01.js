/* modal */

function openModal() {
  document.getElementById('priceModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('priceModal').style.display = 'none';
}

// tab--------------------
// 탭 메뉴 클릭 이벤트
$('.s2_btn li').click(function () {
  // 현재 클릭한 탭에 'active' 클래스 추가
  $('.s2_btn li').removeClass('active');
  $(this).addClass('active');

  // 해당 탭의 텍스트 콘텐츠만 보여주기
  var tabClass = $(this).data('alt');
  $('.item_info li').removeClass('active');
  $('.' + tabClass).addClass('active');

  // desk_only 이미지도 해당 탭에 맞는 이미지만 활성화
  $('.desk_only li').removeClass('active');
  $('.desk_only li.' + tabClass).addClass('active');
});

document.addEventListener('DOMContentLoaded', () => {
  // main 등장
  gsap.from('.sub_text,.sub_btn', {
    y: 100, // 아래에서 위로
    opacity: 0, // 투명도에서 불투명도로
    duration: 2, // 애니메이션 시간
    ease: 'power2.out', // 애니메이션 효과
  });

  gsap.from('.s1_text', {
    y: 100,
    opacity: 0,
    duration: 2,
    ease: 'power2.out',
    delay: 1,
  });

  gsap.from('.modal_btn', {
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

  gsap.from('.s1_right,.box', {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out',
    delay: 3,
  });

  // GSAP ScrollTrigger 애니메이션 적용
  gsap.registerPlugin(ScrollTrigger);

  // #s2 섹션의 요소들 애니메이션
  gsap.from('#s2', {
    y: 100, // 아래에서 위로 이동
    opacity: 0, // 투명도 0에서 시작
    duration: 1.5, // 애니메이션 지속 시간
    ease: 'power2.out', // 부드러운 애니메이션 효과
    scrollTrigger: {
      trigger: '#s2', // 애니메이션을 트리거할 요소
      start: 'top 80%', // 스크롤 위치 (요소 상단이 뷰포트의 80% 위치에 도달할 때 시작)
      toggleActions: 'play none none none', // 트리거 액션
    },
  });

  // 추가 애니메이션: 버튼이나 텍스트가 차례로 나타나게 하기
  gsap.from('.s2_head', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#s2',
      start: 'top 80%',
    },
  });

  gsap.from('.s2_content ul', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5, // #s2 전체 애니메이션 이후
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#s2',
      start: 'top 80%',
    },
  });

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
});

// 화면 크기별 transform 동작 정의
function applyTransform() {
  const reviews = document.querySelectorAll('.s3_content .review');

  if (window.matchMedia('(min-width: 1300px)').matches) {
    // 1300px 이상일 때 transform 적용
    reviews.forEach((review, index) => {
      switch (index) {
        case 1:
          review.style.transform = 'translateY(-5rem)';
          break;
        case 2:
          review.style.transform = 'translateY(-8rem)';
          break;
        case 3:
          review.style.transform = 'translateY( -12rem)';
          break;
        case 4:
          review.style.transform = 'translateY(-15rem)';
          break;
        case 5:
          review.style.transform = 'translateY(-20rem)';
          break;
        case 6:
          review.style.transform = 'translateY(-24rem)';
          break;
        default:
          review.style.transform = 'none';
      }
    });
  } else {
    // 1300px 미만일 때 transform 해제
    reviews.forEach((review) => {
      review.style.transform = 'none';
    });
  }
}

// 초기 실행
applyTransform();

// 창 크기 변경 시 transform 재적용
window.addEventListener('resize', applyTransform);

document.getElementById('date_input').value = new Date()
  .toISOString()
  .substring(0, 10);

// 초기 실행
applyResponsiveStyles();

// 창 크기 변경 시 실행
window.addEventListener('resize', applyResponsiveStyles);


