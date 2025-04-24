class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        pointer1 = 0
        pointer2 = len(s) - 1
        while pointer1 < pointer2:
            while (pointer1 < pointer2) and (s[pointer1].isalnum() == False):
                pointer1 += 1
            while (pointer1 < pointer2) and (s[pointer2].isalnum() == False):
                pointer2 -= 1
            while (pointer1 < pointer2) and s[pointer1].lower() != s[pointer2].lower():
                return False
            pointer1 += 1
            pointer2 -= 1
        return True