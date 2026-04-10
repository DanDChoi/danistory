# Danistory

> Dan + History
> 

[Danistory](https://danistory.vercel.app/)

Next.js App Router 기반으로 만든 개인 포트폴리오 웹사이트입니다.  
Chat GPT와 Claude를 활용해 바이브코딩을 통해 만들어졌습니다.  

블로그 콘텐츠는 Markdown 파일로 관리하고, 빌드 시 파일을 읽어 정적으로 렌더링하도록 구성했습니다.  

라우팅은 /blog → /blog/[category] → /blog/[slug] 구조로 설계해서  
URL만으로도 콘텐츠 계층이 드러나도록 했고,  
글 목록은 공통 컴포넌트로 분리해서 재사용성을 높였습니다.

로그인과 방명록 기능은 Supabase를 사용해서 OAuth 인증과 데이터 저장을 처리했고,  
전체는 Vercel을 통해 배포했습니다.

정적 콘텐츠와 동적 기능을 분리해서 구조적으로 단순하면서도 확장 가능하게 설계한 것이 특징입니다.  

스타일링은 Tailwind CSS를 사용해서 유틸리티 기반으로 빠르게 UI를 구성했습니다.  
별도의 CSS Modules은 사용하지 않고, 컴포넌트 내에서 className으로 스타일을 관리하고 있습니다.
