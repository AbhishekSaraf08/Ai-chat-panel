//dummy intial chat called on home page 
export const initialChats = [
  {
    name: "Luis Easton",
    preview: "Hey! I have a questi...", 
    time: "45m",
    messages: [
      { from: "user", text: "I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you’d be able to refund me, as it is unopened and still in perfect condition." },
      { from: "agent", text: "Let me just look into this for you, Luis." }
    ]
  },
  {
    name: "Ivan Maxwell",
     preview: "Hi there, I have a qu...", time: "3min",
    messages: [
      { from: "user", text: "Hi, I'm trying to log into my account but I'm getting an error saying my password is incorrect. I’ve tried resetting it, but I’m still not able to log in. Can you help?" },
      { from: "agent", text: "Of course, Ivan. Let me verify your account and check what's going on." }
    ]
  },
  {
    name: "Sandra Bennett",
    preview: "Good morning, let me...", time: "30m",
    messages: [
      { from: "user", text: "Good morning, I'm looking for partnership opportunities in the NYC region. We're a digital agency and would love to collaborate on tech campaigns." },
      { from: "agent", text: "Thanks for reaching out! I'd love to hear more about what you have in mind." }
    ]
  },
  {
    name: "Tech Support",
    preview: "Bug report", time: "45m",
    messages: [
      { from: "user", text: "We're having issues with the Booking API throwing a 500 error intermittently. This started around 2 AM UTC today. Could you check the logs and advise?" },
      { from: "agent", text: "Thanks for flagging that. I've notified our dev team and we're reviewing the logs now." }
    ]
  },
  {
    name: "Miracle Chen",
    preview: "Hey there, I'm here to...", time: "45m",
    messages: [
      { from: "user", text: "Hey, I'm trying to get approved for your financing offer but the form keeps rejecting my address. It’s valid and verified with USPS. Can you check why this is happening?" },
      { from: "agent", text: "I'm sorry to hear that. Can you provide the full address so I can replicate the issue on our end?" }
    ]
  }
];