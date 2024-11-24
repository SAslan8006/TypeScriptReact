import React from "react";

function Literal() {
  return <div>Literal</div>;
}

export default Literal;

//Örneğin authMethod isimli bir değişkeniniz var ve bu değişkenin sadece e-mail, google ve github değerlerini almasını istiyorsunuz. İşte tam bu durumda TypeScript in custom types özelliği yardımımıza koşuyor.

let authMethod: "e-mail" | "google" | "github";

authMethod = "google";
console.log(authMethod); // "google"

authMethod = "github";
console.log(authMethod); // "github"
