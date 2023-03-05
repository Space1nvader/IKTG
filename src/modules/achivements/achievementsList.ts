export const achievements = {
  '1': {
    title: 'Угадайте свою первую игру',
    image:
      'https://sun9-71.userapi.com/impg/Q-PTDbVDeaxMP23clO94tTvRJz4X2XG1sMlk_g/iMRtYe_OPpY.jpg?size=1098x170&quality=96&sign=5446a7f154ab42c6f1c9464ded18e096&type=album'
  },
  '30': {
    title: 'Угадайте 30 игр!',
    image:
      'https://sun9-53.userapi.com/impg/0ud90qKTa7wBU7qDsw84_mCtd53kGGXU7cnBxg/xt2gdZoju7Q.jpg?size=1096x170&quality=96&sign=12849b3445ef51dc8e2425ae30fa2d91&type=album'
  },
  all: {
    title: 'Угадайте все игры!',
    image:
      'https://sun6-22.userapi.com/impg/95nR4SpSK-Yh7dpe2ZOPFxZfB35o79ZhXMpm-Q/Btx8NALOeCQ.jpg?size=1098x170&quality=96&sign=36392d34eaf0f4faf69c8012b3386e7a&type=album'
  }
};

export type AchievementsType = keyof typeof achievements;
