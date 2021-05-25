temp = location.href.split("?");
let scores = temp[1].split(",");
scores.map((element, index) => {
  scores[index] = parseInt(element);
});

if (scores[0] >= 0) {
  //의지력 O
  if (scores[1] >= 0) {
    //같이같이
    if (scores[2] >= 0) {
      //밖이좋아
      if (scores[3] > 0) {
        //money 많아
        document.querySelector(".result-title").innerHTML = "테니스";
        document.querySelector("#result-img").src = "https://images.unsplash.com/flagged/photo-1576972405668-2d020a01cbfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80";
        document.querySelector(".result-text").innerHTML = "야외에서 상대방과 같이 할 수 있는 <br/>테니스를 추천합니다!";
      } else {
        //money 적어
        document.querySelector(".result-title").innerHTML = "배드민턴";
        document.querySelector("#result-img").src = "https://images.unsplash.com/photo-1613921303354-63cdae352a9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80";
        document.querySelector(".result-text").innerHTML = "가볍게 즐길 수 있는 배드민턴을 추천합니다!<p>장비를 갖추기도 쉽고 <br/>운동 방법도 어렵지 않습니다.</p>"
      }
    } else {
      //안이좋아
      if (scores[3] > 0) {
        //money 많아
        document.querySelector(".result-title").innerHTML = "스쿼시";
        document.querySelector("#result-img").src = "https://images.unsplash.com/photo-1554290813-ec6a2a72e5c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80";
        document.querySelector(".result-text").innerHTML = "빠르게 튀어오르는 공, <br/>끼릭거리는 신발 마찰음, <br/>공을 쫓아 랠리를 이어가보세요. <p>작은 공간에서 펼쳐지는 <br/>긴장감 넘치는 스포츠입니다.</p>";
      } else {
        //money 적어
        document.querySelector(".result-title").innerHTML = "탁구";
        document.querySelector("#result-img").src = "https://images.unsplash.com/photo-1593786481097-cf281dd12e9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
        document.querySelector(".result-text").innerHTML ="가볍게 즐길 수 있는 탁구를 추천합니다.<br/>한 번 배워두면 오랫동안 즐길 수 있습니다.";
      }
    }
  } else {
    //혼자가 좋아
    if (scores[2] >= 0) {
      //밖이좋아
      if (scores[3] > 0) {
        //money 많아
        document.querySelector(".result-title").innerHTML = "승마";
        document.querySelector("#result-img").src = "https://images.unsplash.com/photo-1503749575383-1804cd51ae35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80";
        document.querySelector(".result-text").innerHTML = "여유가 있는 당신에게는 승마를 추천합니다. <p>말과 함께 푸른 숲속을 거닐어보세요.</p>"
      } else {
        //money 적어
        document.querySelector(".result-title").innerHTML = "런닝";
        document.querySelector("#result-img").src = "https://images.unsplash.com/flagged/photo-1556746834-11617819565b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80";
        document.querySelector(".result-text").innerHTML = "날씨만 나쁘지 않다면 언제든 좋습니다. <br/>복장자유, 가벼운 신발맞 갖춰신고 <br/>집 주변을 달려보세요.<br/> 매일 보던 풍경이 색다르게 보입니다.";
      }
    } else {
      //안이좋아
      if (scores[3] > 0) {
        //money 많아
        document.querySelector(".result-title").innerHTML = "링피트";
        document.querySelector("#result-img").src = "/image/poongfit.JPG";
        document.querySelector(".result-text").innerHTML = "운동게임 링피트를 추천합니다.<br/>별 것 아닌 듯 하지만 <br/>매일 하기가 쉽지 않아요.<br/>게임하면서 즐겁게 운동할 수 있으니까 <br/>쉽게 질리지 않아요.<br/><br/>스위치만 있다면 저스트댄스, 복싱등<br/>다른 것도 가능합니다.";
      } else {
        //money 적어
        document.querySelector(".result-title").innerHTML = "홈트레이닝";
        document.querySelector("#result-img").src = "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
        document.querySelector(".result-text").innerHTML = "홈트를 추천합니다. <br/>tv, 노트북, 데스크탑, 태블릿, 휴대폰 <br/>하나라도 있다면 가능하고 저렴합니다! <br/>당신의 의지만 있다면 <br/>이시국 최고의 운동방법입니다.";
      }
    }
  }
} else {
  //의지력 X
  if (scores[1] >= 0) {
    //같이같이
    if (scores[2] >= 0) {
      //밖이좋아
      if (scores[3] > 0) {
        //money 많아
        document.querySelector(".result-title").innerHTML = "골프";
        document.querySelector("#result-img").src = "https://images.unsplash.com/photo-1533079115945-fc2a264c637c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80";
        document.querySelector(".result-text").innerHTML = "여유가 있는 당신에게는 골프를 추천합니다.<br/>넓게 펼쳐진 코트에서 친목도 다지고 <br/>스트레스도 풀 수 있습니다.";
        
      } else {
        //money 적어
        document.querySelector(".result-title").innerHTML = "배드민턴";
        document.querySelector("#result-img").src = "https://images.unsplash.com/photo-1613921303354-63cdae352a9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80";
        document.querySelector(".result-text").innerHTML = "가볍게 즐길 수 있는 배드민턴을 추천합니다!<br/>장비를 갖추기도 쉽고 <br/>운동 방법도 어렵지 않습니다.</p>"
      }
    } else {
      //안이좋아
      if (scores[3] > 0) {
        //money 많아
        document.querySelector(".result-title").innerHTML = "스쿼시";
        document.querySelector("#result-img").src = "https://images.unsplash.com/photo-1554290813-ec6a2a72e5c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80";
        document.querySelector(".result-text").innerHTML = "빠르게 튀어오르는 공, <br/>끼릭거리는 신발 마찰음, <br/>공을 쫓아 랠리를 이어가보세요. <br/>작은 공간에서 펼쳐지는 <br/>긴장감 넘치는 스포츠입니다.";
      } else {
        //money 적어
        document.querySelector(".result-title").innerHTML = "댄스스포츠";
        document.querySelector("#result-img").src = "https://images.unsplash.com/photo-1575449235878-6de79c4c8ef4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
        document.querySelector(".result-text").innerHTML = "리듬에 맞춰 서로의 호흡을 맞춰나가는 <br/>댄스스포츠 어떠세요?"
      }
    }
  } else {
    //혼자가 좋아
    if (scores[2] >= 0) {
      //밖이좋아
      if (scores[3] > 0) {
        //money 많아
        document.querySelector(".result-title").innerHTML = "클라이밍";
        document.querySelector("#result-img").src = "https://images.unsplash.com/photo-1610768798760-e01a4b43814e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
        document.querySelector(".result-text").innerHTML ="온 몸의 근육을 쓸 수 있는 <br/>클라이밍을 추천합니다. <br/>실내, 실외 원하는 대로 즐길 수 있고 <br/>목표에 도달했을 때의 성취감은 <br/>이루말할 수 없습니다.";
        
      } else {
        //money 적어
        document.querySelector(".result-title").innerHTML = "동호회";
        document.querySelector("#result-img").src = "https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80";
        document.querySelector(".result-text").innerHTML = "운동을 오래하려면 <br/>누군가와 같이 하는 것도 좋습니다. <br/>운동 모임에 가입해보세요.</p>";
      }
    } else {
      //안이좋아
      if (scores[3] > 0) {
        //money 많아
        document.querySelector(".result-title").innerHTML = "개인PT";
        document.querySelector("#result-img").src = "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
        document.querySelector(".result-text").innerHTML = "자금적 여유가 있는 당신에게는 <br/>1:1맞춤 운동을 추천합니다. <br/>운동 나오라고 연락주고, <br/>자세도 교정해주고, <br/>궁금한 건 바로 물어볼 수도 있어요.";
      } else {
        //money 적어
        
        if(scores[4] > 0){//교정필요
            document.querySelector(".result-title").innerHTML ="요가";
            document.querySelector("#result-img").src = "https://images.unsplash.com/photo-1543604055-dede4512686d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
            document.querySelector(".result-text").innerHTML = "몸의 균형을 맞출 수 있는 <br/>요가를 추천합니다. <br/>안 되던 동작도 꾸준히 하다보면 <br/>잘 하는 나를 볼 수 있어요.";
        } else{ //교정안필요
            document.querySelector(".result-title").innerHTML ="헬스";
            document.querySelector("#result-img").src = "https://images.unsplash.com/photo-1598575468023-85b93d887c3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1103&q=80";
            document.querySelector(".result-text").innerHTML = "어디에든 위치한 헬스장, <br/>6개월, 1년 단위로 끊지 말고 <br/>우선 1달~3달만 다녀보세요. <br/>처음부터 많이 하는 것보다 <br/>자주 꾸준히 가는 것이 중요합니다. <br/>운동 시간과 난이도는 차근차근 늘려가봐요!";
        }
      }
    }
  }
}
const modal = document.querySelector(".modal");

function copy() {
  const create = document.createElement("input");
  create.setAttribute("value", "https://rominasch.github.io/exercise_test/");
  document.body.appendChild(create);
  create.select();
  document.execCommand("copy");
  document.body.removeChild(create);
  modal.classList.remove("hidden");
  setTimeout( () => {modal.classList.add("hidden")}, 1000);
}
