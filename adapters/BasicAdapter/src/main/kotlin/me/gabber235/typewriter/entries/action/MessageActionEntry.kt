package me.gabber235.typewriter.entries.action

import me.gabber235.typewriter.adapters.Colors
import me.gabber235.typewriter.adapters.Entry
import me.gabber235.typewriter.adapters.modifiers.EntryIdentifier
import me.gabber235.typewriter.adapters.modifiers.Help
import me.gabber235.typewriter.entry.Criteria
import me.gabber235.typewriter.entry.Modifier
import me.gabber235.typewriter.entry.Query
import me.gabber235.typewriter.entry.entries.ActionEntry
import me.gabber235.typewriter.entry.entries.SpeakerEntry
import me.gabber235.typewriter.extensions.placeholderapi.parsePlaceholders
import me.gabber235.typewriter.snippets.snippet
import me.gabber235.typewriter.utils.Icons
import me.gabber235.typewriter.utils.sendMiniWithResolvers
import net.kyori.adventure.text.minimessage.tag.resolver.Placeholder
import org.bukkit.entity.Player

val messageFormat: String by snippet(
    "action.message.format",
    "\n<gray> [ <bold><speaker></bold><reset><gray> ]\n<reset><white> <message>\n"
)

@Entry("send_message", "Send a message to a player", Colors.RED, Icons.MESSAGE)
class MessageActionEntry(
    override val id: String = "",
    override val name: String = "",
    override val triggers: List<String> = emptyList(),
    override val criteria: List<Criteria> = emptyList(),
    override val modifiers: List<Modifier> = emptyList(),
    @Help("The speaker of the message")
    @EntryIdentifier(SpeakerEntry::class)
    val speaker: String = "",
    @Help("The message to send")
    val message: String = "",
) : ActionEntry {
    override fun execute(player: Player) {
        super.execute(player)

        player.sendMessageAction(message, speakerDisplayName)
    }

    private fun Player.sendMessageAction(text: String, speakerDisplayName: String) {
        sendMiniWithResolvers(
            messageFormat,
            Placeholder.parsed("speaker", speakerDisplayName),
            Placeholder.parsed("message", text.parsePlaceholders(player).replace("\n", "\n "))
        )
    }

    val speakerDisplayName: String
        get() = speakerEntry?.displayName ?: ""

    val speakerEntry: SpeakerEntry?
        get() = Query.findById(speaker)


}