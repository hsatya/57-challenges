import tkinter as tk

root = tk.Tk()
root.title("My First Tkinter App!")
label = tk.Label(root, text="Hello, Tkinter")
label.grid(row=0, column=0, padx=10, pady=10)

label = tk.Label(root, text="Hello, World")
label.grid(row=0, column=0, padx=10, pady=10)
entry = tk.Entry(root)
entry.grid(row=1, column=0, padx=10, pady=10)

def on_button_click():
    user_input = entry.get()
    label.config(text=f"Hello, {user_input}!")
button = tk.Button(root, text="Display Greeting", command=on_button_click)
button.grid(row=2, column=0, padx=10, pady=10)

var = tk.BooleanVar()
checkbutton = tk.Checkbutton(root, text="Check me", variable=var)
checkbutton.grid(row=3, column=0, padx=10, pady=10)

var1 = tk.StringVar()
radiobutton1 = tk.Radiobutton(root, text="Option 1", variable=var1, value="Option 1")
radiobutton2 = tk.Radiobutton(root, text="Option 2", variable=var1, value="Option 2")

radiobutton1.grid(row=4, column=0, padx=10, pady=5)
radiobutton2.grid(row=5, column=0, padx=10, pady=5)


root.mainloop()
