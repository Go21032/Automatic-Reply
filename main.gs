function ResponseMail() {
  const subject = '自動返信';
  const sendMailBodyWithAttachment = '課題の提出確認しました！';
  const sendMailBodyWithoutAttachment = '申し訳ありませんが、添付ファイルが見つかりませんでした。再度提出をお願いします。';

  // 未読スレッド一覧を取得
  var unreadMailThreads = GmailApp.search("label:inbox is:unread");

  // 未読スレッド一覧をループ処理でスレッドを一つずつ取り出す
  unreadMailThreads.forEach(function(unreadMailThread) {
    // スレッドのメッセージの一つ目を取得する
    var message = unreadMailThread.getMessages()[0];
    var mailSubject = message.getSubject();

    // 取得した件名に特定の文字列が入っているか確認する
    if (mailSubject.indexOf(subject) != -1) {
      // メッセージに添付ファイルがあるかチェックする
      var attachments = message.getAttachments();
      var replyBody;
      
      if (attachments.length > 0) {
        // 添付ファイルがあれば、その旨を返信用本文に設定
        replyBody = sendMailBodyWithAttachment;
      } else {
        // 添付ファイルがなければ、その旨を返信用本文に設定
        replyBody = sendMailBodyWithoutAttachment;
      }
      
      // 差出人にリプライする
      message.reply(replyBody);
      
      // 処理したスレッドを既読にする
      GmailApp.markThreadRead(unreadMailThread);

      // 処理したメールにスターを付ける
      message.star();
    }
  });
}
