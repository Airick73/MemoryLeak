---
title: "About"
layout: "about"
url: "/about/"
summary: about
toc: false
hideToc: true
---

```C++
#include <iostream>
#include <vector>
#include <string>

class Human : public Being
{
    public:
        void whoami()
        {
            std::cout << first_name << last_name << std::endl;
        }

        void call_me()
        {
            std::cout << phone_number << std::endl;
        }

        void email()
        {
            std::cout << email << std::endl;
        }

    private:
        std::string first_name;
        std::string last_name;
        std::vector<int> phone_number;
        std::vector<char> email;
}

int main()
{
    Human human("Eric", "Kemmer", "386-405-1639", "eric199900@gmail.com");
}



```


