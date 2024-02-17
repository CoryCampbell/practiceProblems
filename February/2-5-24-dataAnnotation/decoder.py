def decode(message_file, translations_file):
    with open(translations_file, 'r') as trans_file:
        translations = dict(line.strip().split() for line in trans_file)

    with open(message_file, 'r') as file:
        pyramid_numbers = [int(line.strip()[-1]) for line in file]

    decoded_words = [translations[str(number)] for number in pyramid_numbers]

    decoded_message = ' '.join(decoded_words)
    return decoded_message

# Example usage:
message_file_path = 'message.txt'             # Replace with the actual file path
translations_file_path = 'translations.txt'   # Replace with the actual file path
decoded_message = decode(message_file_path, translations_file_path)

# Print the decoded message
print(decoded_message)
