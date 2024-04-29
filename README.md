# GASで特定の件名に対して自動返信
自分用に変えたいときは以下の３行を変えると良いでしょう。
```
 const subject = '自動返信';
 const sendMailBodyWithAttachment = '課題の提出確認しました！';
 const sendMailBodyWithoutAttachment = '申し訳ありませんが、添付ファイルが見つかりませんでした。再度提出をお願いします。';
```
