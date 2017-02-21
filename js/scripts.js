$(function(){
  var answerArray = [];
  var creatures = [];
  var places = [];
  var spells = [];

  function tellFortune(a){
    var sign = a[0];
      switch(sign) {
        case "aries":
            $(".fortuneTime").text("early spring");
            break;
        case "taurus":
            $(".fortuneTime").text("late spring");
            break;
        case "gemini":
            $(".fortuneTime").text("early summer");
            break;
        case "cancer":
            $(".fortuneTime").text("summer");
            break;
        case "leo":
            $(".fortuneTime").text("late summer");
            break;
        case "virgo":
            $(".fortuneTime").text("early fall");
            break;
        case "libra":
            $(".fortuneTime").text("peak of fall");
            break;
        case "scorpio":
            $(".fortuneTime").text("late fall");
            break;
        case "sagittarius":
            $(".fortuneTime").text("early winter");
            break;
        case "capricorn":
            $(".fortuneTime").text("dead of winter");
            break;
        case "aquarius":
            $(".fortuneTime").text("late winter");
            break;
        case "pisces":
            $(".fortuneTime").text("very near future");
            break;
        default:
            $(".fortuneTime").text("future");
            break;
      };
      console.log("place: "+a[2]);
      if (a[2] == "enchantedForest"){
        $(".fortunePlace").text("In a misty, overgrown enchanted Forest");
        $("#fortune").css('background-image', "url('img/forest.png')");
      }
      else if (a[2] == "youthFountain"){
        $(".fortunePlace").text("At the Fountain of Youth");
        $("#fortune").css('background-image', "url('img/fountain.jpg')");
      } else if (a[2] == "hauntedHouse"){
        $(".fortunePlace").text("In a house full of super natural activity");
        $("#fortune").css('background-image', "url('img/haunted.jpg')");
      } else if (a[2] == "hogwarts"){
          $(".fortunePlace").text("At a school of Witchcraft and Wizardry");
          $("#fortune").css('background-image', "url('img/hogwarts.jpg')");
      };
      if (a[1] == "leprechauns"){
        if(a[3] == "spell"){
          $(".fortuneCreature").text("A gangly group of curse-casting lebrechauns will be-witch you!");
        } else if(a[3] == "astroProject"){
          $(".fortuneCreature").text("A crafty, austroprojecting leprechaun will send your soul to the spirit realm!");
        } else if(a[3] == "voodooDoll"){
          $(".fortuneCreature").text("An anchient witch doctor leprechaun will grant you a voodoo doll to use upon your enemies. This will come at a great cost. Beware...");
        }
      } else if (a[1] == "unicorn"){
        if(a[3] == "spell"){
          $(".fortuneCreature").text("You will ride on a great unicorn casting spells!");
        }
        else if(a[3] == "astroProject"){
          $(".fortuneCreature").text("You will ascend your spirit to the unicorn realm and meet the unicorn gods!");
        }
        else if(a[3] == "voodooDoll"){
          $(".fortuneCreature").text("You will use a unicorn horn to stab a voodoo doll and terminate your enemy.");
        }
      } else if (a[1] == "pixies"){
        if(a[3] == "spell"){
          $(".fortuneCreature").text("You will stumble on a tribe of pixies who will enchant you with wicked spells.");
        }
        else if(a[3] == "astroProject"){
          $(".fortuneCreature").text("As you astro project, you will frolic in the land of the pixies.");
          }
        else if(a[3] == "voodooDoll"){
          $(".fortuneCreature").text("You will notice the Great Pixie King has made a voodoo doll of you. You will have to do him favors to save your tiny life.");
        }
      } else if (a[1] == "witches"){
            if(a[3] == "spell"){
              $(".fortuneCreature").text("Witches will put a hex on you.");
            }
            else if(a[3] == "astroProject"){
              $(".fortuneCreature").text("Witches steal your body as you astro project!");
            }
            else if(a[3] == "voodooDoll"){
              $(".fortuneCreature").text("Witches will tell you a dark secret about voodoo dolls.");
            }
        } else if (a[1] == "dragons"){
            if(a[3] == "spell"){
              $(".fortuneCreature").text("You're riding a dragon into battle casting all the rightous spells!");
            }
            else if(a[3] == "astroProject"){
              $(".fortuneCreature").text("As you astro project a dragon will eat your soul...");
            }
            else if(a[3] == "voodooDoll"){
              $(".fortuneCreature").text("The Dragon King will bewitch your body with a voodoo doll of you.");
            }
          } else if (a[1] == "gryphons"){
              if(a[3] == "spell"){
                $(".fortuneCreature").text("Gryphons will teach you how to wield the true power of dark magic.");
              } else if(a[3] == "astroProject"){
                $(".fortuneCreature").text("Gryphons will protect your spirit as you astro project in the next dimension.");
              }
              else if(a[3] == "voodooDoll"){
                $(".fortuneCreature").text("Gryphons will convince you to abondon voodoo magic... at a terrible price.");
              }
            }
      //animate the fortune display
      $("#fortune").slideDown().animate({height:'500px',opacity:'1',display:'block'},500);
    }; // end of fortune function

  $("#fortuneQuiz").submit(function(event){
    event.preventDefault();

    //construct input answers
    $('input[name="magicalCreatures"]:checked').each(function(){
      creatures.push($(this).val());
    });
    $('input[name="magicalPlace"]:checked').each(function(){
      places.push($(this).val());
    });
    $('input[name="spells"]:checked').each(function(){
      spells.push($(this).val());
    });

    answerArray[0] = $('input[name="sign"]:checked').val();
    answerArray[1] = creatures;
    answerArray[2] = places;
    answerArray[3] = spells;

    console.log(answerArray[0] + " " + answerArray[1] + " " + answerArray[2] + " " + answerArray[3]);

    tellFortune(answerArray);
  });
});
