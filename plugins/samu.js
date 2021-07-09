let handler = async m => m.reply(`
  ^    ^    ^    ^      
 /S\  /U\  /S\  /I\   
<___><___><___><___>

Si quieres hablar con la dueña personalmente:

https://wa.me/50377111111
https://wa.me/5037779043
https://t.me/Susana661
                                        
`.trim()) 
handler.help = ['susi']
handler.tags = ['info']
handler.command = /^samu$/i

module.exports = handler
