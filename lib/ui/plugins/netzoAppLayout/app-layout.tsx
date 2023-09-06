import { JSX } from "preact";
import { type AppProps } from "../deps.ts";
import { type NetzoAppLayoutOptions } from "./mod.ts";
import { cn } from "../../components/utils.ts";

const Logo = (props: JSX.HTMLAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="638"
    height="172"
    viewBox="0 0 638 172"
    fill="none"
    {...props}
  >
    <path
      d="M34.8332 55.5389C39.3907 55.5389 43.519 56.7278 47.2178 59.1057C50.9167 61.4175 53.823 64.654 55.9367 68.8153C58.1164 72.9765 59.2062 77.6992 59.2062 82.9834C59.2062 88.2675 58.1494 93.0232 56.0358 97.2505C53.9221 101.412 51.0158 104.681 47.3169 107.059C43.6841 109.371 39.6549 110.527 35.2295 110.527C32.059 110.527 29.0536 109.899 26.2134 108.644C23.4392 107.323 21.1274 105.738 19.278 103.889V104.483C19.278 106.201 18.7165 107.654 17.5937 108.843C16.4708 109.965 15.0507 110.527 13.3333 110.527C11.616 110.527 10.1959 109.965 9.07299 108.843C7.95011 107.72 7.38867 106.267 7.38867 104.483V42.2625C7.38867 40.5451 7.95011 39.125 9.07299 38.0021C10.1959 36.8132 11.616 36.2188 13.3333 36.2188C15.0507 36.2188 16.4708 36.8132 17.5937 38.0021C18.7165 39.125 19.278 40.5451 19.278 42.2625V62.9697C20.8632 60.9881 23.0759 59.2708 25.9162 57.8177C28.7564 56.2985 31.7287 55.5389 34.8332 55.5389ZM33.347 99.6284C37.5743 99.6284 41.042 98.0431 43.7501 94.8727C46.4583 91.7022 47.8123 87.7391 47.8123 82.9834C47.8123 78.2276 46.4583 74.2976 43.7501 71.1931C41.1081 68.0226 37.6404 66.4374 33.347 66.4374C29.0536 66.4374 25.5529 68.0226 22.8448 71.1931C20.1367 74.2976 18.7826 78.2276 18.7826 82.9834C18.7826 87.7391 20.1367 91.7022 22.8448 94.8727C25.5529 98.0431 29.0536 99.6284 33.347 99.6284Z"
      class="fill-black dark:fill-white"
    />
    <path
      d="M108.452 56.5296C110.17 56.5296 111.59 57.1241 112.713 58.313C113.836 59.4359 114.397 60.856 114.397 62.5734V87.7391C114.397 94.8727 112.416 100.454 108.452 104.483C104.555 108.512 98.974 110.527 91.7083 110.527C84.4426 110.527 78.8613 108.512 74.9642 104.483C71.0672 100.454 69.1186 94.8727 69.1186 87.7391V62.5734C69.1186 60.856 69.6801 59.4359 70.8029 58.313C71.9258 57.1241 73.3459 56.5296 75.0633 56.5296C76.7806 56.5296 78.2007 57.1241 79.3236 58.313C80.4465 59.4359 81.0079 60.856 81.0079 62.5734V87.7391C81.0079 91.7682 81.8996 94.7736 83.683 96.7551C85.4664 98.6706 88.1415 99.6284 91.7083 99.6284C95.3412 99.6284 98.0493 98.6706 99.8327 96.7551C101.616 94.7736 102.508 91.7682 102.508 87.7391V62.5734C102.508 60.856 103.069 59.4359 104.192 58.313C105.315 57.1241 106.735 56.5296 108.452 56.5296Z"
      class="fill-black dark:fill-white"
    />
    <path
      d="M138.464 103.492C138.464 105.21 137.903 106.663 136.78 107.852C135.657 108.975 134.237 109.536 132.52 109.536C130.802 109.536 129.382 108.975 128.259 107.852C127.137 106.663 126.575 105.21 126.575 103.492V62.5734C126.575 60.856 127.137 59.4359 128.259 58.313C129.382 57.1241 130.802 56.5296 132.52 56.5296C134.237 56.5296 135.657 57.1241 136.78 58.313C137.903 59.4359 138.464 60.856 138.464 62.5734V103.492ZM132.421 50.0896C130.175 50.0896 128.59 49.7263 127.665 48.9998C126.74 48.2732 126.278 46.9852 126.278 45.1357V43.2533C126.278 41.4038 126.773 40.1158 127.764 39.3892C128.755 38.6627 130.34 38.2994 132.52 38.2994C134.832 38.2994 136.45 38.6627 137.375 39.3892C138.299 40.1158 138.762 41.4038 138.762 43.2533V45.1357C138.762 47.0512 138.266 48.3723 137.275 49.0988C136.351 49.7593 134.732 50.0896 132.421 50.0896Z"
      class="fill-black dark:fill-white"
    />
    <path
      d="M163.564 103.492C163.564 105.21 162.969 106.663 161.78 107.852C160.657 108.975 159.237 109.536 157.52 109.536C155.868 109.536 154.481 108.975 153.359 107.852C152.236 106.663 151.674 105.21 151.674 103.492V42.2625C151.674 40.5451 152.236 39.125 153.359 38.0021C154.547 36.8132 156.001 36.2188 157.718 36.2188C159.369 36.2188 160.756 36.8132 161.879 38.0021C163.002 39.125 163.564 40.5451 163.564 42.2625V103.492Z"
      class="fill-black dark:fill-white"
    />
    <path
      d="M202.66 98.3404C203.584 98.3404 204.41 98.8027 205.137 99.7275C205.929 100.586 206.326 101.742 206.326 103.195C206.326 104.979 205.335 106.498 203.353 107.753C201.438 108.942 199.258 109.536 196.814 109.536C192.719 109.536 189.251 108.677 186.411 106.96C183.637 105.177 182.25 101.445 182.25 95.7644V68.419H177.692C176.107 68.419 174.786 67.8905 173.729 66.8337C172.672 65.7769 172.144 64.4559 172.144 62.8706C172.144 61.3514 172.672 60.0964 173.729 59.1057C174.786 58.0488 176.107 57.5204 177.692 57.5204H182.25V51.1795C182.25 49.4621 182.811 48.042 183.934 46.9191C185.123 45.7302 186.576 45.1357 188.293 45.1357C189.945 45.1357 191.332 45.7302 192.455 46.9191C193.578 48.042 194.139 49.4621 194.139 51.1795V57.5204H201.174C202.759 57.5204 204.08 58.0488 205.137 59.1057C206.193 60.1625 206.722 61.4835 206.722 63.0688C206.722 64.588 206.193 65.876 205.137 66.9328C204.08 67.9236 202.759 68.419 201.174 68.419H194.139V95.269C194.139 96.6561 194.502 97.6799 195.229 98.3404C195.955 98.9348 196.946 99.2321 198.201 99.2321C198.73 99.2321 199.456 99.1 200.381 98.8358C201.174 98.5055 201.933 98.3404 202.66 98.3404Z"
      class="fill-black dark:fill-white"
    />
    <path
      d="M306.257 57.8177C307.116 57.8177 307.809 58.0819 308.337 58.6103C308.932 59.1387 309.229 59.8653 309.229 60.79C309.229 60.856 309.13 61.2854 308.932 62.078L293.674 107.654C293.344 108.248 292.914 108.744 292.386 109.14C291.858 109.47 291.296 109.602 290.702 109.536C290.107 109.536 289.579 109.371 289.116 109.041C288.654 108.71 288.291 108.248 288.027 107.654L275.047 77.1378L263.455 107.654C263.191 108.182 262.795 108.644 262.266 109.041C261.804 109.371 261.309 109.536 260.78 109.536C260.12 109.602 259.492 109.47 258.898 109.14C258.369 108.744 258.006 108.248 257.808 107.654L242.154 62.078C241.956 61.6817 241.856 61.2523 241.856 60.79C241.856 59.9313 242.154 59.2378 242.748 58.7094C243.343 58.1149 244.069 57.8177 244.928 57.8177C245.522 57.8177 246.051 58.0158 246.513 58.4121C247.042 58.7424 247.405 59.2047 247.603 59.7992L260.78 99.3312L272.571 69.707C273.033 68.452 273.958 67.8245 275.345 67.8245C276.666 67.8245 277.59 68.452 278.119 69.707L290.504 99.133L303.483 59.7992C303.879 58.4782 304.804 57.8177 306.257 57.8177Z"
      class="fill-black dark:fill-white"
    />
    <path
      d="M326.365 106.564C326.365 107.422 326.068 108.149 325.473 108.744C324.945 109.272 324.251 109.536 323.393 109.536C322.534 109.536 321.807 109.272 321.213 108.744C320.685 108.149 320.42 107.422 320.42 106.564V60.9881C320.42 60.1295 320.685 59.4359 321.213 58.9075C321.807 58.313 322.534 58.0158 323.393 58.0158C324.251 58.0158 324.945 58.313 325.473 58.9075C326.068 59.4359 326.365 60.1295 326.365 60.9881V106.564ZM323.393 51.3776C322.072 51.3776 321.048 51.0804 320.321 50.4859C319.595 49.8254 319.231 48.9007 319.231 47.7117V46.721C319.231 45.532 319.595 44.6403 320.321 44.0459C321.114 43.3854 322.171 43.0551 323.492 43.0551C326.134 43.0551 327.455 44.2771 327.455 46.721V47.7117C327.455 48.9007 327.092 49.8254 326.365 50.4859C325.704 51.0804 324.714 51.3776 323.393 51.3776Z"
      class="fill-black dark:fill-white"
    />
    <path
      d="M351.716 64.654V97.845C351.716 100.355 352.178 102.072 353.103 102.997C354.027 103.856 355.249 104.285 356.769 104.285C357.165 104.285 357.66 104.219 358.255 104.087C358.849 103.889 359.312 103.79 359.642 103.79C360.236 103.79 360.732 104.054 361.128 104.582C361.59 105.045 361.822 105.606 361.822 106.267C361.822 107.191 361.293 107.984 360.236 108.644C359.179 109.239 357.925 109.536 356.471 109.536C354.688 109.536 353.103 109.371 351.716 109.041C350.329 108.71 348.975 107.72 347.653 106.068C346.398 104.417 345.771 101.775 345.771 98.1422V64.654H338.538C337.746 64.654 337.052 64.3898 336.458 63.8614C335.929 63.333 335.665 62.6725 335.665 61.8798C335.665 61.0872 335.929 60.4267 336.458 59.8983C337.052 59.3699 337.746 59.1057 338.538 59.1057H345.771V48.1081C345.771 47.2494 346.035 46.5558 346.564 46.0274C347.158 45.433 347.885 45.1357 348.743 45.1357C349.602 45.1357 350.296 45.433 350.824 46.0274C351.418 46.5558 351.716 47.2494 351.716 48.1081V59.1057H361.623C362.35 59.1057 362.977 59.4029 363.506 59.9974C364.1 60.5918 364.398 61.2523 364.398 61.9789C364.398 62.7715 364.133 63.4321 363.605 63.9605C363.077 64.4228 362.416 64.654 361.623 64.654H351.716Z"
      class="fill-black dark:fill-white"
    />
    <path
      d="M398.467 58.5112C404.412 58.5112 408.837 60.3937 411.743 64.1586C414.65 67.8575 416.103 72.6463 416.103 78.5249V106.564C416.103 107.422 415.806 108.149 415.211 108.744C414.683 109.272 413.989 109.536 413.131 109.536C412.272 109.536 411.545 109.272 410.951 108.744C410.422 108.149 410.158 107.422 410.158 106.564V78.5249C410.158 74.2315 409.134 70.7638 407.087 68.1217C405.039 65.4136 401.836 64.0595 397.476 64.0595C394.702 64.0595 392.06 64.7201 389.55 66.0411C387.106 67.3621 385.125 69.1455 383.605 71.3913C382.086 73.571 381.327 75.9488 381.327 78.5249V106.564C381.327 107.422 381.029 108.149 380.435 108.744C379.907 109.272 379.213 109.536 378.354 109.536C377.496 109.536 376.769 109.272 376.175 108.744C375.646 108.149 375.382 107.422 375.382 106.564V39.1911C375.382 38.3324 375.646 37.6389 376.175 37.1104C376.769 36.516 377.496 36.2188 378.354 36.2188C379.213 36.2188 379.907 36.516 380.435 37.1104C381.029 37.6389 381.327 38.3324 381.327 39.1911V68.2208C383.11 65.3806 385.587 63.0688 388.758 61.2854C391.928 59.4359 395.164 58.5112 398.467 58.5112Z"
      class="fill-black dark:fill-white"
    />
    <g clip-path="url(#clip0_521_375)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M550.275 171.032C569.751 171.032 587.705 164.513 602.073 153.539L589.323 140.789C578.321 148.542 564.901 153.096 550.417 153.096C535.831 153.096 522.323 148.477 511.277 140.623L498.411 153.488C512.79 164.494 530.769 171.032 550.275 171.032ZM482.307 137.353L495.177 124.483C487.381 113.462 482.8 100.005 482.8 85.4783C482.8 70.9949 487.353 57.575 495.107 46.5723L482.357 33.8222C471.382 48.1906 464.863 66.1443 464.863 85.6207C464.863 105.067 471.362 122.996 482.307 137.353ZM635.687 85.6207C635.687 105.097 629.168 123.051 618.193 137.419L605.491 124.717C613.389 113.653 618.035 100.108 618.035 85.4783C618.035 70.8918 613.416 57.3841 605.562 46.3377L618.143 33.7566C629.148 48.1358 635.687 66.1146 635.687 85.6207ZM602.008 17.6525C587.65 6.70799 569.722 0.208984 550.275 0.208984C530.799 0.208984 512.845 6.72784 498.477 17.7027L511.178 30.4043C522.243 22.5069 535.787 17.8607 550.417 17.8607C564.944 17.8607 578.401 22.4417 589.422 30.2379L602.008 17.6525Z"
        fill="#01E0CB"
      />
      <path
        d="M571.628 85.6205C571.628 97.4134 562.068 106.973 550.275 106.973C538.482 106.973 528.922 97.4134 528.922 85.6205C528.922 73.8276 538.482 64.2676 550.275 64.2676C562.068 64.2676 571.628 73.8276 571.628 85.6205Z"
        class="fill-black dark:fill-white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M542.953 32.6655C519.279 35.8846 500.539 54.6242 497.32 78.2982H515.253C518.175 64.4892 529.104 53.6355 542.953 50.8242V32.6655ZM584.888 78.2982C581.987 64.584 571.187 53.7847 557.473 50.8833V32.6655C581.147 35.8846 599.887 54.6242 603.106 78.2982H584.888ZM557.473 120.518C571.282 117.596 582.136 106.668 584.947 92.8182H603.106C599.887 116.492 581.147 135.232 557.473 138.451V120.518ZM515.194 92.8182C518.025 106.763 529.009 117.746 542.953 120.577V138.451C519.279 135.232 500.539 116.492 497.32 92.8182H515.194Z"
        fill="#0080FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_521_375">
        <rect
          width="635.748"
          height="170.823"
          class="fill-white dark:fill-black"
          transform="translate(0.224609 0.208984)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default (options: NetzoAppLayoutOptions) => {
  const { title, description, favicon, image } = options;
  return ({ Component }: AppProps) => {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="icon" type="image/svg+xml" href={favicon} />
        </head>
        {/* see https://unocss.dev/integrations/runtime#preventing-fouc */}
        <body class="flex flex-col n-bg-base" un-cloak>
          <header class="flex justify-between items-center py-4 px-4">
            <div class="flex">
              {/* NOTE: use dark:filter-invert (in image.class) to invert color on dark */}
              {image?.src && (
                <img
                  {...image}
                  class={cn("w-auto h-12 my-auto mr-3", image.class)}
                />
              )}
              <div class="grid">
                <h1 class="my-auto text-2xl font-semibold dark:text-white">
                  {title}
                </h1>
                <p class="text-sm dark:text-gray-300">{description}</p>
              </div>
            </div>
            <a href="https://netzo.io" target="_blank">
              <Logo class="w-auto h-8" />
            </a>
          </header>

          <main class="flex-1 overflow-x-hidden">
            <Component />
          </main>
        </body>
      </html>
    );
  };
};
