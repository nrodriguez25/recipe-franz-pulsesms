module.exports = (Franz) => {
  const getMessages = function getMessages() {
    var count = document.getElementsByClassName("conversation-title mdl-card__supporting-text bold").length;
    Franz.setBadge(count);
    
  };
  Franz.loop(getMessages);
};
