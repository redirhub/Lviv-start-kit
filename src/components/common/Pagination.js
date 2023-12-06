import React from 'react';
import {
    Button,
    Flex,
    Text,
} from '@chakra-ui/react';
import {
    Pagination,
    PaginationPage,
    PaginationNext,
    PaginationPrevious,
    PaginationPageGroup,
    PaginationContainer,
    PaginationSeparator
} from '@ajna/pagination';
import { useTranslation } from 'react-i18next';
import ArrowLeftIcon from '@/icons/arrow-left';
import ArrowRightIcon from '@/icons/arrow-right';
import useAppResponsive from '@/hooks/useAppResponsive';
import theme from '@/config/theme';

const Paginator = ({
    pages,
    pagesCount,
    currentPage,
    setCurrentPage,
    isDisabled }) => {

    const { t } = useTranslation();
    const { isMobile } = useAppResponsive();

    const handlePageChange = (nextPage) => {
        setCurrentPage(nextPage);
    };

    return (
        <Flex justifyContent='space-between' px={isMobile ? 0 : 1}>
            <Pagination
                pagesCount={pagesCount}
                currentPage={currentPage}
                isDisabled={isDisabled}

                onPageChange={handlePageChange}
            >
                <PaginationContainer
                    align="center"
                    justify="space-between"
                    py={4}
                    px={isMobile ? 0 : 4}
                    w="full"
                >
                    <PaginationPrevious
                        padding={0}
                        border={0}
                        shadow={0}
                    >
                        <Button mr={1} size={isMobile ? 'sm' : undefined} sx={{ width: isMobile ? 12 : undefined, pr: isMobile ? 1 : undefined }} leftIcon={<ArrowLeftIcon size="20px" ml={0} />}>{!isMobile && <Text>{t('shared.previous', 'Previous')}</Text>}</Button>
                    </PaginationPrevious>
                    <PaginationPageGroup
                        align="center"
                        separator={
                            <PaginationSeparator
                                border={0}
                                shadow={0}
                                fontSize="sm"
                                w={7}
                                jumpSize={11}
                            />
                        }
                    >
                        {pages.filter((page)=>(isMobile?(page===currentPage||page===currentPage+2||page===currentPage-2||page===currentPage-1||page===currentPage+1):true)).map((page) => (
                            <PaginationPage
                                w={9}
                                border={0}
                                shadow={0}
                                key={`pagination_page_${page}`}
                                page={page}
                                color={theme.colors.gray[500]}
                                fontSize="sm"
                                _hover={{
                                    bg: theme.colors.primary[100],
                                    color: theme.colors.primary[500],
                                }}
                                _current={{
                                    bg: theme.colors.primary[100],
                                    fontSize: 'sm',
                                    w: 9,
                                    color: theme.colors.primary[500],
                                }}
                            />
                        ))}
                    </PaginationPageGroup>
                    <PaginationNext
                        padding={0}
                        border={0}
                        shadow={0}
                    >
                        <Button ml={1} size={isMobile ? 'sm' : undefined} sx={{ width: isMobile ? 12 : undefined, pl: isMobile ? 0 : undefined }} rightIcon={<ArrowRightIcon size="20px" ml={0} />}>{!isMobile && <Text>{t('shared.next', 'Next')}</Text>}</Button>
                    </PaginationNext>
                </PaginationContainer>
            </Pagination>
        </Flex>
    );
};

export default Paginator;
