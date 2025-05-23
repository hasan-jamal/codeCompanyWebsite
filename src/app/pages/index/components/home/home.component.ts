import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation,CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SlickCarouselModule,SlickCarouselComponent } from 'ngx-slick-carousel';
import { trigger, transition, style, animate } from '@angular/animations';
declare var $: any;
import videojs from 'video.js';
// import type Player from 'video.js/dist/types/player';
import 'video.js/dist/video-js.css';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [
    CommonModule, 
    SlickCarouselModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
                    '../../../../../assets/css/style.css'
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
 encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideFade', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('50ms ease', style({ height: '*', opacity: 1 , display:'none'})),
      ]),
      transition(':leave', [
        animate('500ms ease', style({ height: 0, opacity: 0, display:'block' })),
      ]),
    ]),
  ],
})
export class HomeComponent  implements OnInit ,AfterViewInit{
constructor(private elementRef: ElementRef) {}
  @ViewChild('slickModalBlogs', { static: false }) slickModalBlogs!: SlickCarouselComponent;
  @ViewChild('slickPeopleSaying', { static: false }) slickPeopleSaying!: SlickCarouselComponent;
  @ViewChild('videoPlayer', { static: false }) videoElement!: ElementRef;
  @ViewChild('sliderBlogs') sliderBlogsRef!: ElementRef;
  @ViewChild('slideTitle') slideTitleRef!: ElementRef;
  @ViewChild('slideText') slideTextRef!: ElementRef;
  @ViewChild('slideActive') slideActiveRef!: ElementRef;
  @ViewChild('media') mediaElement: ElementRef<HTMLVideoElement> | null = null;
  @ViewChild('carousel', { static: false }) carousel: ElementRef;
  @ViewChild('target', { static: false }) target!: ElementRef<HTMLIFrameElement>;

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  mainVideo: any;
  plyrList : any[]= [
    {
        src: 'https://res.cloudinary.com/dx2ah9foq/video/upload/v1746881529/videoOne_gpt6dw.mp4',
        type: 'video/mp4',
      title: 'AI vs Human: The Results Will Shock You!',
      subTitle: 'Lorem ipsum dolor sit amet...',
      img:'assets/images/Frame-398-min.png'
    },
  {
    src: 'https://res.cloudinary.com/dx2ah9foq/video/upload/v1746881638/videoTwo_v86h3s.mp4',
    type: 'video/mp4',
    title: 'Real Estate Touch TV App',
    subTitle: 'Lorem ipsum dolor sit amet...',
          img:'assets/images/Frame-399-min.png'
  },
  {
    src: 'https://res.cloudinary.com/dx2ah9foq/video/upload/v1746881692/videoFour_entojn.mp4',
    type: 'video/mp4',
    title: 'Construction WIP Monitoring',
    subTitle: 'Lorem ipsum dolor sit amet...',
          img:'assets/images/Frame-397-min.png'
  },
    {
      src: 'https://res.cloudinary.com/dx2ah9foq/video/upload/v1746881805/videoFive_h68de2.mp4',
        type: 'video/mp4',
      title: 'Sustainability via Digital Twin',
      subTitle: 'Lorem ipsum dolor sit amet...',
            img:'assets/images/Frame-396-min.png'
    },
    {
      src: 'https://res.cloudinary.com/dx2ah9foq/video/upload/v1746882191/videoThree_g4vcgu.mp4',
      type: 'video/mp4',
      title: 'Monitoring Sustainable Environments',
      subTitle: 'Lorem ipsum dolor sit amet...',
      id: 'monitoring-sustainable',
    img:'assets/images/Frame-398-min.png' 
    }
  ];


  ngOnInit(): void {
     this.activateFirstBox();
     this.mainVideo = this.plyrList[0];
     this.plyrList = this.plyrList.slice(1)

 
  }
  changeVideo(video: any) {
    const updatedList = this.plyrList.filter(v => v.src !== video.src);
    if (this.mainVideo) {
      updatedList.push(this.mainVideo);
    }
    this.mainVideo = video;
    this.plyrList = updatedList;

    // Force reload and play
    setTimeout(() => {
      if (this.videoPlayer) {
        this.videoPlayer.nativeElement.load();
        this.videoPlayer.nativeElement.play().catch(() => {}); // optional: handle autoplay error
      } 
      
    });
  }
 
  ngAfterViewInit() {
    this.initSliders(); 

    setTimeout(() => {
      const dots = $('.sectionSix .slick-dots');
      if (!dots.find('.custom-next-arrow').length) {
        dots.append('<button class="custom-next-arrow"></button>');
      }
     $('.custom-next-arrow').append('<img src="../../assets/images/arrow-peopleSaying.svg" />');
      $('.custom-next-arrow').on('click', () => {
        this.slickPeopleSaying.slickNext()
      });
      });
  }

  // Start Section Three style
  boxes = [
    { id: 1, showPart2: false, isAnimating: false, isActive: false },
    { id: 2, showPart2: false, isAnimating: false, isActive: false },
    { id: 3, showPart2: false, isAnimating: false, isActive: false },
    { id: 4, showPart2: false, isAnimating: false, isActive: false },
  ];

  activateFirstBox(): void {
    const firstBox = this.boxes[0];
    firstBox.isActive = true;
    firstBox.showPart2 = true;
    firstBox.isAnimating = true;

    setTimeout(() => {
      firstBox.isAnimating = false;
    }, 300);

    setTimeout(() => {
      firstBox.isAnimating = false;
    }, 600);
  }

  onBoxClick(clickedBox: any): void {
    this.boxes.forEach(box => {
      box.showPart2 = false;
      box.isAnimating = false;
      box.isActive = false;
    });

    clickedBox.showPart2 = true;
    clickedBox.isActive = true;
    clickedBox.isAnimating = true;

    setTimeout(() => {
      clickedBox.isAnimating = false;
    }, 300);

    setTimeout(() => {
      clickedBox.isAnimating = false;
    }, 600);
  }
  // End Section Three style
  // Section Seven style
  activeIndex = 1; 
  faqs = [
    {
      question: 'How can I request a consultation or a quote?',
      answer:
        'You can contact us directly via the contact form on our website or send an email to email@code.com...',
    },
    {
      question: 'How can I request a consultation or a quote?',
      answer:
        'You can contact us directly via the contact form on our website or send an email to email@code.com...',
    },
    {
      question: 'How can I request a consultation or a quote?',
      answer:
        'You can contact us directly via the contact form on our website or send an email to email@code.com...',
    },
    {
      question: 'How can I request a consultation or a quote?',
      answer:
        'You can contact us directly via the contact form on our website or send an email to email@code.com...',
    },
    {
      question: 'How can I request a consultation or a quote?',
      answer:
        'You can contact us directly via the contact form on our website or send an email to email@code.com...',
    },
  ];
  toggleFaq(index: number) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }
  // End Section Seven style

// Code Sliders
  // slider Blogs

  // First slider logos
  logos = [
    '../../../assets/images/logo1.svg',
    '../../../assets/images/logo2.svg',
    '../../../assets/images/logo3.svg',
    '../../../assets/images/logo4.svg',
    '../../../assets/images/logo5.svg',
    '../../../assets/images/logo6.svg',
    '../../../assets/images/logo7.svg',
    '../../../assets/images/Partners logos/Germany (2).png',
    '../../../assets/images/Partners logos/Germany.png',
    '../../../assets/images/Partners logos/India (2).png',
    '../../../assets/images/Partners logos/India (3).png',
    '../../../assets/images/Partners logos/India (4).png',
    '../../../assets/images/Partners logos/India (5).png'
  ];
  slideConfig = {
    slidesToShow: 7.2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    infinite: true,
    arrows: false,
    dots: false,
    rtl: false, // This makes it move from left to right
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.6
        }
      }
    ]
  };

  // Second slider logos
  logos2 = [
    '../../../assets/images/Partners logos/Austria.png',
    '../../../assets/images/Partners logos/United States (2).png',
    '../../../assets/images/Partners logos/United States1.png',
    '../../../assets/images/Partners logos/United States.png',
    '../../../assets/images/Partners logos/United States-US.png',
    '../../../assets/images/Partners logos/United States(US).png',
    '../../../assets/images/Partners logos/India.jpeg',
     '../../../assets/images/Partners logos/United States (2).png',
    '../../../assets/images/Partners logos/United States1.png',
  ];
  slideConfiglogos2 = {
    slidesToShow: 7.2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    infinite: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5
        }
      }
    ]
  };

  // Slider Blogs
    slidesBlogs = [
    {
      title: "Infused is at the forefront of health innovation",
      fullText: "Enlightened Health AI takes your wellness journey to new heights with advanced predictive analytics. Gain access to intelligent health solutions that illuminate the path to a healthier, more informed you.",
      shortText: "Enlightened Health AI takes your wellness journey to new heights with advanced predictive analytics...",
      img: '../../assets/images/sectionFour-slide1.png'
    },
    {
      title: "AI-Powered Wellness Solutions",
      fullText: "Discover AI-driven insights that help you take control of your health and well-being with personalized recommendations and actionable health data.",
      shortText: "Discover AI-driven insights that help you take control of your health and well-being...",
      img: '../../assets/images/sectionFour-slide2.png'
    },
    {
      title: "Transforming Healthcare with AI",
      fullText: "Our cutting-edge AI technology is reshaping healthcare, providing smarter and faster solutions for both patients and medical professionals.",
      shortText: "Our cutting-edge AI technology is reshaping healthcare, providing smarter and faster solutions...",
      img: '../../assets/images/sectionFour-slide3.png'
    },
    {
      title: "Next-Gen AI for a Healthier Future",
      fullText: "Explore the future of AI in healthcare and how it enhances daily life for a better tomorrow with advanced data analysis and predictive insights.",
      shortText: "Explore the future of AI in healthcare and how it enhances daily life for a better tomorrow...",
      img: '../../assets/images/sectionFour-slide4.png'
    }
  ];
  slideBlog = {
    slidesToShow:3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    dots: false,
    rtl: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  nextSlideBlog() {
    this.slickModalBlogs.slickNext();
  }
  prevSlideBlog() {
    this.slickModalBlogs.slickPrev();
  }
    public initSliders(): void {
    $(".sliderBlogs").on("beforeChange", (event: any, slick: any, currentSlide: number, nextSlide: number) => {
      const slide = this.slidesBlogs[nextSlide];

      $("#slideTitle, #slideText, #slideActive").fadeOut(300, function () {
        $("#slideTitle").text(slide.title);
        $("#slideText").html(`${slide.shortText} <b class="color-linearGradient readMoreBtn" style="cursor:pointer;">Read more</b>`);
        $("#slideActive").attr("src", slide.img);
        $("#slideTitle, #slideText, #slideActive").fadeIn(500);
      });
    });

    $(document).on("click", ".readMoreBtn", () => {
      const currentSlideIndex = $(".sliderBlogs").slick("slickCurrentSlide");
      const fullText = this.slidesBlogs[currentSlideIndex].fullText;
      $("#slideText").html(fullText);
    });
  }
  // End Slider Blog

  // Slider What people are saying?
    peopleSaying = [
    {
      text: "The AI-powered data analysis services from Code helped us gain deeper insights into our customers and make smarter decisions.",
      fullName: "Jenny Wilson",
      jobTitle: "CEO of Growtime",
      backgroundColor:"#D9D9D9"
    },
    {
      text: "The AI-powered data analysis services from Code helped us gain deeper insights into our customers and make smarter decisions.",
      fullName: "Jenny Wilson",
      jobTitle: "CEO of Growtime",
      backgroundColor:"#FEEFE6"
    },

        {
      text: "The AI-powered data analysis services from Code helped us gain deeper insights into our customers and make smarter decisions.",
      fullName: "Jenny Wilson",
      jobTitle: "CEO of Growtime",
      backgroundColor:"#D9D9D9"
    },
        {
      text: "The AI-powered data analysis services from Code helped us gain deeper insights into our customers and make smarter decisions.",
      fullName: "Jenny Wilson",
      jobTitle: "CEO of Growtime",
      backgroundColor:"#FEEFE6"
    },
        {
      text: "The AI-powered data analysis services from Code helped us gain deeper insights into our customers and make smarter decisions.",
      fullName: "Jenny Wilson",
      jobTitle: "CEO of Growtime",
      backgroundColor:"#D9D9D9"
    }
  ];
    sliderpeopleSaying = {
    slidesToShow:4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    dots: true,
    rtl: false,
    responsive: [
      {
        breakpoint: 1229,
        settings: {
          slidesToShow: 3.5
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  }