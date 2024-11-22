    // tab-------------------- 
    
    // 탭 메뉴 클릭 이벤트
    $('.s2_btn li').click(function() {
    // 현재 클릭한 탭에 'active' 클래스 추가
    $('.s2_btn li').removeClass('active');
    $(this).addClass('active');

    // 해당 탭의 텍스트 콘텐츠만 보여주기
    var tabId = $(this).data('alt');
    $('.item_info li').removeClass('active');
    $('#' + tabId).addClass('active');

    // desk_only 이미지도 해당 탭에 맞는 이미지만 활성화
    $('.desk_only li').removeClass('active');
    $('.desk_only li#' + tabId).addClass('active');
    });

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

    document.addEventListener("DOMContentLoaded", () => {
    // main 등장
    gsap.from("main h2", {
        y: 100, 
        opacity: 0, // 투명도에서 불투명도로
        duration: 1, // 애니메이션 시간
    });

    gsap.from("main .main-inner a", {
        y: 100,
        opacity: 1,
        duration: 1.5,
    });

    gsap.from("#section1 .tit_wrap", {
        opacity: 0,
        duration: 1.5,
        delay: 2,
    });

    gsap.from('#section1 table tr', {
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        delay: 2,
    });

    gsap.from('#section2 .tit_wrap', {
        y: -30,
        opacity: 0,
        duration: 1.5,
        delay: 2,
    });
    
    gsap.from('#section2 .content', {
        y: -30,
        opacity: 0,
        stagger: 0.3,
        duration: 1.5,
        delay: 2,
    });
});

    document.addEventListener("DOMContentLoaded", () => {
    // GSAP ScrollTrigger 애니메이션 적용
    gsap.registerPlugin(ScrollTrigger);

    // #s2 섹션의 요소들 애니메이션
    gsap.from("#s2", {
        y: 100, // 아래에서 위로 이동
        opacity: 0, // 투명도 0에서 시작
        duration: 1.5, // 애니메이션 지속 시간
        scrollTrigger: {
        start: "top 8=60%", // 스크롤 위치 (요소 상단이 뷰포트의 60% 위치에 도달할 때 시작)
        },
    });

    // 추가 애니메이션: 버튼이나 텍스트가 차례로 나타나게 하기
    gsap.from(".s2_head", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
        trigger: "#s2",
        start: "top 80%",
        },
    });

    gsap.from(".s2_content ul", {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 1.5, 
        scrollTrigger: {
        trigger: "#s2",
        start: "top 80%",
        },
    });

    gsap.from('#section3 .tit_wrap', {
        y: -50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        delay: 2.5, // #s2 전체 애니메이션 이후
        scrollTrigger: {
        trigger: '#s2',
        start: 'top 75%',
        },
    });

    gsap.from('.review', {
        y: -50,
        opacity: 0,
        stagger: 0.5,
        duration: 1,
        delay: 2.5, // #s2 전체 애니메이션 이후
        scrollTrigger: {
        trigger: '#s2',
        start: 'top 75%',
        },

    });


    


    

    
});