![구조 도식화](./contents/images/파일%20구조%20도식화.png)

드릴링 최소화를 위한 전역 상태 관리는 빠져있습니다. 만약 적용한다면,<br/>
`Provider`는 `App`에 그 전역 상태를 관리하는 훅은 `features`에 생성하는게 맞지 않을까 생각됩니다.
<br/>
이 프로젝트 처럼 `todo`라는 엔티티가 있을 경우에 `features/todo/model`에 전역 상태를 관리하는 훅을 작성하는 형식!
<br/><br/>
모든 커스텀 훅을 `features`에 두는 것은 아니고 재사용 가능한 `shared`에도 괜찮지 않을까 싶네요. (예: `useForm`, `useValidation`)<br/>
