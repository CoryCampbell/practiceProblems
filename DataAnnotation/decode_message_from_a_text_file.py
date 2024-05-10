import os

current_directory = os.getcwd()
file_path = os.path.join(current_directory, "DataAnnotation/message_file.txt")

with open(file_path, "r") as file:
    message_file = file.read()

def decode(message_file):
    word_list = []
    decoded = ""
    pyramid = []
    count = 1
    word_lines = message_file.strip().split("\n")
    for line in word_lines:
        word_list.append(tuple(line.split(" ")))
    sorted_list = sorted(word_list, key=lambda x: int(x[0]))  # Sort by the first element of each tuple as an integer
    while len(sorted_list) > 0:
        pack = {}
        for _ in range(count):
            if sorted_list:
                key, value = sorted_list.pop(0)
                pack[int(key)] = value
        pyramid.append(pack)
        count += 1
    for i, item in enumerate(pyramid):
        last_key = max(item.keys())
        decoded += item[last_key]
        if i < len(pyramid) - 1:
            decoded += " "
    return decoded

decode(message_file)

    # 1:            1
    # 2:          2   3
    # 3:        4   5   6
    # 4:      7   8   9   10
    # 5:   11  12  13   14   15

# let count = 1;

# while (arr.length > 0) {
#   let rows = [];
#   let pack = [];
#   for (let i = 0; i < count; i++) {
#     let curr = arr.shift();
#     pack.push(curr)
#   }
#   rows.push(pack);
#   pack = [];
#   count++;
# }



# with open("message_file.txt", 'r') as file:
#     message_file = file.read();

# def decode(message_file):
#     print(message_file);
#     return message_file;





# def decode(message_file, translations_file):
#     with open(translations_file, 'r') as trans_file:
#         translations = dict(line.strip().split() for line in trans_file)

#     with open(message_file, 'r') as file:
#         pyramid_numbers = [int(line.strip()[-1]) for line in file]

#     decoded_words = [translations[str(number)] for number in pyramid_numbers]

#     decoded_message = ' '.join(decoded_words)
#     return decoded_message

# # Example usage:
# message_file_path = 'message.txt'             # Replace with the actual file path
# translations_file_path = 'translations.txt'   # Replace with the actual file path
# decoded_message = decode(message_file_path, translations_file_path)

# # Print the decoded message
# print(decoded_message)
# Original dictionary
