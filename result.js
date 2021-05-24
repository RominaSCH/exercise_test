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
        document.querySelector("#result-img").src = "/image/tennis.jpg";
        document.querySelector(".result-text").innerHTML = "야외에서 누군가와 같이 운동할 수 있는 테니스를 추천합니다!";
      } else {
        //money 적어
        document.querySelector(".result-title").innerHTML = "배드민턴, 캐치볼";
        document.querySelector("#result-img").src = "/image/badminton.jpg";
        document.querySelector(".result-text").innerHTML = "천릿길도 한걸음부터, 가볍게 즐길 수 있는 배드민턴을 추천합니다! <p>장비를 갖추기도 쉽고 운동 방법도 어렵지 않습니다.</p>"
      }
    } else {
      //안이좋아
      if (scores[3] > 0) {
        //money 많아
        document.querySelector(".result-title").innerHTML = "스쿼시";
        document.querySelector("#result-img").src = "/image/squash.jpg";
        document.querySelector(".result-text").innerHTML = "빠르게 튀어오르는 공, 끼릭거리는 신발 마찰음, 공을 쫓아 랠리를 이어가보세요. <p>작은 공간에서 펼쳐지는 긴장넘치는 스포츠입니다.</p>";
      } else {
        //money 적어
        document.querySelector(".result-title").innerHTML = "탁구";
        document.querySelector("#result-img").src = "/image/pingpong.jpg";
        document.querySelector(".result-text").innerHTML ="가볍게 즐길 수 있는 탁구를 추천합니다. 작은 공, 작은 라켓, 빠른 공! 한 번 배워두면 어디가서든 즐길 수 있습니다.";
      }
    }
  } else {
    //혼자가 좋아
    if (scores[2] >= 0) {
      //밖이좋아
      if (scores[3] > 0) {
        //money 많아
        document.querySelector(".result-title").innerHTML = "승마";
        document.querySelector("#result-img").src = "/image/horse.jpg";
        document.querySelector(".result-text").innerHTML = "여유가 있는 당신에게는 승마를 추천합니다. <p>말과 함께 푸른 숲속을 거닐어보세요.</p>"
      } else {
        //money 적어
        document.querySelector(".result-title").innerHTML = "런닝";
        document.querySelector("#result-img").src = "/image/running.jpg";
        document.querySelector(".result-text").innerHTML = "날씨만 나쁘지 않다면 언제든 가능한 런닝을 추천합니다. <p>복장자유, 가벼운 신발맞 갖춰신고 주변을 달려보세요!</p> 매일 보던 풍경이 색다르게 보입니다.";
      }
    } else {
      //안이좋아
      if (scores[3] > 0) {
        //money 많아
        document.querySelector(".result-title").innerHTML = "링피트";
        document.querySelector("#result-img").src = "/image/gym.jpg";
        document.querySelector(".result-text").innerHTML = "게임으로 즐기는 운동, 링피트를 추천합니다. <p>별 것 아닌 듯 하지만 매일 하기가 쉽지 않아요.</p>게임하면서 즐겁게 운동할 수 있으니까 쉽게 질리지 않아요.<p>스위치만 있다면 저스트댄스, 복싱도 가능합니다.</p>";
      } else {
        //money 적어
        document.querySelector(".result-title").innerHTML = "홈트추천";
        document.querySelector("#result-img").src = "/image/yoga2.jpg";
        document.querySelector(".result-text").innerHTML = "홈 트레이닝을 추천합니다. tv, 노트북, 데스크탑, 태블릿, 휴대폰 하나라도 있다면 가능하고 저렴합니다! 당신의 의지만 있다면 코-시국 최고의 운동방법입니다.";
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
        document.querySelector("#result-img").src = "/image/golf.jpg";
        document.querySelector(".result-text").innerHTML = "자금적 여유가 있는 당신에게는 골프를 추천합니다. <p>넓게 펼쳐진 코트에서 친목도 다지고 스트레스도 풀 수 있습니다.</p>";
        
      } else {
        //money 적어
        document.querySelector(".result-title").innerHTML = "배드민턴";
        document.querySelector("#result-img").src = "/image/badminton.jpg";
        document.querySelector(".result-text").innerHTML = "천릿길도 한걸음부터, 가볍게 즐길 수 있는 배드민턴을 추천합니다! <p>장비를 갖추기도 쉽고 운동 방법도 어렵지 않습니다.</p>"
      }
    } else {
      //안이좋아
      if (scores[3] > 0) {
        //money 많아
        document.querySelector(".result-title").innerHTML = "스쿼시";
        document.querySelector("#result-img").src = "/image/squash.jpg";
        document.querySelector(".result-text").innerHTML = "빠르게 튀어오르는 공, 끼릭거리는 신발 마찰음, 공을 쫓아 랠리를 이어가보세요. <p>작은 공간에서 펼쳐지는 긴장넘치는 스포츠입니다.</p>";
      } else {
        //money 적어
        document.querySelector(".result-title").innerHTML = "댄스스포츠";
        document.querySelector("#result-img").src = "/image/dancesports.jpg";
        document.querySelector(".result-text").innerHTML = "리듬에 맞춰 서로의 호흡을 맞춰나가는 댄스스포츠 어떠세요?"
      }
    }
  } else {
    //혼자가 좋아
    if (scores[2] >= 0) {
      //밖이좋아
      if (scores[3] > 0) {
        //money 많아
        document.querySelector(".result-title").innerHTML = "클라이밍";
        document.querySelector("#result-img").src = "/image/climbing.jpg";
        document.querySelector(".result-text").innerHTML ="온 몸의 근육을 쓸 수 있는 클라이밍을 추천합니다. <p>실내, 실외 원하는 대로 즐길 수 있고 목표에 도달했을 때의 성취감을 이루말할 수 없습니다.</p>";
        
      } else {
        //money 적어
        document.querySelector(".result-title").innerHTML = "동호회(라이딩 등)";
        document.querySelector("#result-img").src = "/image/riding.jpg";
        document.querySelector(".result-text").innerHTML = "운동을 오래하려면 누군가와 같이 하는 것이 좋습니다. <p>운동 모임에 가입해서 서로 의지를 다져가며 운동해보세요.</p>";
      }
    } else {
      //안이좋아
      if (scores[3] > 0) {
        //money 많아
        document.querySelector(".result-title").innerHTML = "개인PT";
        document.querySelector("#result-img").src = "/image/gym2.jpg";
        document.querySelector(".result-text").innerHTML = "자금적 여유가 있는 당신에게는 1:1맞춤 운동을 추천합니다. 운동시간 되면 나오라고 연락주고, 자세도 교정하고, 궁금한 건 바로 물어볼 수도 있어요.";
      } else {
        //money 적어
        
        if(scores[4] > 0){//교정필요
            document.querySelector(".result-title").innerHTML ="필라테스";
            document.querySelector("#result-img").src = "/image/yoga.jpg";
            document.querySelector(".result-text").innerHTML = "교정을 원하는 당신, 필라테스가 적격입니다.";
        } else{ //교정안필요
            document.querySelector(".result-title").innerHTML ="헬스";
            document.querySelector("#result-img").src = "/image/yoga.jpg";
            document.querySelector(".result-text").innerHTML = "어디에든 위치한 헬스장, 6개월, 1년 단위로 끊지 말고 우선 1달~3달만 다녀보세요. 많이 하는 것보다 자주 꾸준히 가서 앉아라도 있다 오는 것이 중요합니다. 운동 시간은 10분 20분 차근차근 늘려가면 돼요!";
        }
      }
    }
  }
}

function copy() {
  const create = document.createElement("input");
  create.setAttribute("value", "https://rominasch.github.io/exercise_test/");
  document.body.appendChild(create);
  create.select();
  document.execCommand("copy");
  document.body.removeChild(create);
}
